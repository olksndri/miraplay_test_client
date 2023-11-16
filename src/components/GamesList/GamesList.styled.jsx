import styled from "styled-components";

const List = styled.ul`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 65px;
    width: 100%;
  }
`;

export { List };
