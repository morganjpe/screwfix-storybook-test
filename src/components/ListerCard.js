import { useState } from "react";
import styled from "styled-components";

import { Button } from "./Button";
import Quantity from "./Quantity";
import Stars from "./Stars";
import BulletList from "./BulletList";

const ListerCard = ({ sku, name, img, rating, stock, price, bullets }) => {
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = (action) => {
    switch (action) {
      case "DECREMENT":
        return quantity > 1 && setQuantity(quantity - 1);
      case "INCREMENT":
        return quantity < stock && setQuantity(quantity + 1);
      default:
        return quantity;
    }
  };

  return (
    <StyledLister>
      <StyledListerleft>
        <img src={img} alt={name} />
        <Quantity value={quantity} updateValue={updateQuantity} />
      </StyledListerleft>
      <StyledListerRight>
        <StyledListerTitle>
          <h3>{name}</h3> ({sku})
          <Stars {...rating} />
          <BulletList bullets={bullets} size={3} />
          <div>
            <h2>£{price}</h2>
          </div>
        </StyledListerTitle>
        <Button
          data-testid="add-to-basket"
          state={stock === 0 ? "disabled" : "active"}
          style={{ width: "100%" }}
        >
          {stock === 0 ? "No Stock Available" : "Add to Basket"}
        </Button>
      </StyledListerRight>
    </StyledLister>
  );
};

const StyledLister = styled.li`
  display: flex;
  width: 400px;
  border: 1px solid #eee;
  padding: 15px;
`;

const StyledListerleft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  padding-right: 10px;
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledListerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-between;
  h3 {
    display: inline;
  }
  a {
    display: block;
  }
`;

const StyledListerTitle = styled.div``;

export default ListerCard;
