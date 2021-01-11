import ListerCard from "./ListerCard";
import ThemedComponent from "./ThemedComponent";

import { product } from "../mocks/api";

const productData = {
  sku: product.id,
  name: product.name,
  img: product.productMediaObjects[0].contentUrl,
  stock: 1000,
  price: product.currentPrice.incVat.price,
  rating: product.productAverageRating,
  bullets: [
    "Drill, Hammer Drill & Chisel",
    "Max. Impact Energy: 6.1J",
    "Low Vibration",
  ],
};

const component = {
  component: (
    <ThemedComponent>
      <ListerCard />
    </ThemedComponent>
  ),
  title: "Lister Card (PLP)",
};

export default component;

const template = (args) => {
  console.log(args);
  return (
    <ThemedComponent>
      <ListerCard {...args} />
    </ThemedComponent>
  );
};

export const Default = template.bind({});
Default.args = {
  ...productData,
  stock: 1000,
};

export const NoStock = template.bind({});
NoStock.args = {
  ...Default.args,
  stock: 0,
};
