import Stars from "./Stars";
import ThemedComponent from "./ThemedComponent";

const component = {
  component: (
    <ThemedComponent>
      <Stars />
    </ThemedComponent>
  ),
  title: "Stars",
};

export default component;

const template = (args) => (
  <ThemedComponent>
    <Stars {...args} />
  </ThemedComponent>
);

export const Default = template.bind({});
Default.args = {
  ratingValue: 0,
  ratingCount: 0,
};

export const Complete = template.bind({});
Complete.args = {
  ratingValue: 5,
  ratingCount: 200,
};

export const Partial = template.bind({});
Partial.args = {
  ratingValue: 3.4,
  ratingCount: 5,
};
