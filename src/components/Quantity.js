import styled from "styled-components";

const Quantity = ({ value = 1, updateValue }) => {
  return (
    <StyledQuantity>
      <button onClick={() => updateValue("DECREMENT")}>&minus;</button>
      <span>{value}</span>
      <button onClick={() => updateValue("INCREMENT")}>+</button>
    </StyledQuantity>
  );
};

const StyledQuantity = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    border: 1px solid black;
  }

  button {
    background-color: white;
    border: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 22px;
    font-weight: 300;
    cursor: pointer;
  }
`;

export default Quantity;
