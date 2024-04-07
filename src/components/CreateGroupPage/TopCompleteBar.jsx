import styled, { css } from "styled-components";

export const TopBars = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 100px;
`;

const Bar = styled.div`
  flex: 1;
  max-width: 27%;
  height: 5px;
  background-color: #efeff0;
  margin-right: 1rem;
  border-radius: 30px;

  ${(props) =>
    props.$now &&
    css`
      background-color: #aec3de;
    `}
`;

export const TopCompleteBars = ({ currentPage }) => {
  return (
    <TopBars>
      <Bar $now={currentPage === 0} />
      <Bar $now={currentPage === 1} />
      <Bar $now={currentPage === 2} />
    </TopBars>
  );
};
