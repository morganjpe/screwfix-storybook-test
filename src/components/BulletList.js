import styled from "styled-components";

const BulletList = ({ bullets, size }) => {
  const displayBullets = bullets.slice(0, size);

  return (
    <StyledBulletList>
      {displayBullets.map((bullet, index) => (
        <li key={index}>{bullet}</li>
      ))}
    </StyledBulletList>
  );
};

const StyledBulletList = styled.ul`
  margin-left: 0;
  padding-left: 15px;
  margin-bottom: 30px;
  li {
    margin-bottom: 5px;
  }
`;

export default BulletList;
