import styled from "styled-components";

export const Button = ({ children, state = "active" }) => {
  return (
    <StyledButton
      data-testid="add-to-basket"
      state={state}
      disabled={state !== "active" ? true : false}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  cursor: ${({ state }) => (state === "active" ? "pointer" : "not-allowed")};
  border-radius: 3px;
  padding: 10px 15px;
  color: white;
  background: ${({ theme }) => theme.colors.sf_green};
  :disabled {
    ${({ state, theme }) => {
      if (state === "error") {
        return `background: ${theme.colors.sf_red}`;
      }
      return `
            background: ${theme.colors.sf_grey};
            color: black;
        `;
    }}
  }
`;
