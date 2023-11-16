import styled from "styled-components";

const AllGamesWrap = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    min-height: 500px;
    overflow: hidden;
    padding: 20px 20px 50px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    margin: 0 auto;
    min-height: 500px;
    padding-bottom: 50px;
    width: 1170px;
  }
`;

const AllGamesTitle = styled.h4`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    color: var(--main-text-color);
    font-size: 30px;
    font-weight: 900;
    line-height: 100%;
    margin-bottom: 42px;
    text-transform: uppercase;
  }

  @media (min-width: 1200px) {
    color: var(--main-text-color);
    font-size: 48px;
    font-weight: 900;
    line-height: 100%;
    margin-bottom: 42px;
    text-transform: uppercase;
  }
`;

const GenreList = styled.ul`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    gap: 10px;
    overflow-y: auto;
    padding-bottom: 10px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 800px;
  }
`;
const GenreItem = styled.li`
  background: ${(props) => {
    return props.$selected ? "var(--main-green-color)" : "#242424";
  }};

  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid #454545;
    border-radius: 10px;
    color: var(--main-text-color);
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 800;
    height: 36px;
    justify-content: center;
    line-height: 143%;
    padding: 0 15px;
    text-transform: uppercase;
  }

  @media (min-width: 1200px) {
    align-items: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid #454545;
    border-radius: 10px;
    color: var(--main-text-color);
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 800;
    height: 46px;
    justify-content: center;
    line-height: 143%;
    padding: 0 25px;
    text-transform: uppercase;
  }
`;
export { AllGamesWrap, AllGamesTitle, GenreList, GenreItem };
