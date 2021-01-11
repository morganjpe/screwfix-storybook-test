import { Button } from "./Button";
import ThemedComponent from "./ThemedComponent";

const component = {
  component: (
    <ThemedComponent>
      <Button />
    </ThemedComponent>
  ),
  title: "Button",
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["active", "error", "disabled"],
      },
    },
  },
};

export default component;

const Template = (args) => (
  <ThemedComponent>
    <Button {...args} />
  </ThemedComponent>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  state: "active",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  state: "error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  state: "disabled",
};
