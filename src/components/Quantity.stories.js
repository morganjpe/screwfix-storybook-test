import Quantity from "./Quantity";
import ThemedComponent from "./ThemedComponent";
import { State, Store } from "@sambego/storybook-state";

const store = new Store({
  count: 1,
});

const component = {
  component: (
    <ThemedComponent>
      <State store={store}>
        <Quantity />
      </State>
    </ThemedComponent>
  ),
  title: "Quantity",
};

export default component;

const Template = (args) => {
  return (
    <ThemedComponent>
      <State store={store}>
        <Quantity {...args} />
      </State>
    </ThemedComponent>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: store.get("count"),
  updateValue: function (action) {
    switch (action) {
      case "DECREMENT":
        return store.get("count") > 1
          ? store.set({ count: store.get("count") - 1 })
          : store.set(store.get("count"));

      case "INCREMENT":
        return store.set(store.get("count") + 1);
      default:
        return store.get("count");
    }
  },
};
