import styled from "styled-components";

const Stars = ({ ratingCount = 0, ratingValue }) => {
  return (
    <StyledStars title={`${ratingValue} out of 5`}>
      {[...Array(5)].map((_, index) => {
        if (Math.round(ratingValue) >= index + 1) {
          return (
            <span key={index} className="full">
              &#9733;
            </span>
          );
        }
        return (
          <span key={index} className="empty">
            &#9733;
          </span>
        );
      })}
      <span className="rating-count">({ratingCount})</span>
    </StyledStars>
  );
};

const StyledStars = styled.a`
  font-size: 22px;
  .full {
    color: rgba(252, 211, 77);
  }

  .empty {
    color: rgba(229, 231, 235);
  }

  .rating-count {
    font-size: 14px;
    padding-left: 3px;
  }
`;

export default Stars;

// ratingCount: 77,
// ratingValue: 3.7532,
