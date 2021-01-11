import React from "react";
import { render } from "@testing-library/react";
import ListerCard from "./ListerCard";

import { product } from "../mocks/api";

import ThemedComponent from "./ThemedComponent";

const productData = {
  sku: "91024",
  name: "Bath Waste with Plug & Chain 16",
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

const Wrapped = (args) => {
  const data = {
    ...productData,
    ...args,
  };
  return (
    <ThemedComponent>
      <ListerCard {...data} />
    </ThemedComponent>
  );
};

describe("<ListerCard /> component", () => {
  it("should display the product sku", () => {
    const { getByText } = render(<Wrapped />);
    expect(getByText(/91024/)).toBeInTheDocument();
  });

  it("should display the product name", () => {
    const { getByText } = render(<Wrapped />);
    expect(getByText(/Bath Waste with Plug & Chain 16/)).toBeInTheDocument();
  });

  it("should display the product price", () => {
    const { getByText } = render(<Wrapped />);
    expect(getByText(/4.65/)).toBeInTheDocument();
  });

  it("should have enabled button if no stock", () => {
    const { getByTestId } = render(<Wrapped />);
    expect(getByTestId("add-to-basket")).toBeEnabled();
  });

  it("should have disabled button if no stock", () => {
    const { getByTestId } = render(<Wrapped stock={0} />);
    expect(getByTestId("add-to-basket")).toBeDisabled();
  });
});
