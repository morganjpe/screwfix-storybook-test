import BulletList from "./BulletList";

const component = {
  component: BulletList,
  title: "Bullet List",
};

export default component;

const template = (args) => <BulletList {...args} />;

export const Default = template.bind({});

Default.args = {
  bullets: [
    "Max. Torque: 54Nm",
    "21 Torque Settings + Drill + Hammer Drill",
    "13mm Keyless Chuck",
    "2-Speed Variable & Reverse",
    "All-Metal Gearbox",
    "Electronic Brake",
    "Twin LED Work Lights",
    "Automatic Spindle Lock",
    "Fan-Cooled Motor",
    "Does Not Include Battery or Charger",
  ],
  size: 3,
};
