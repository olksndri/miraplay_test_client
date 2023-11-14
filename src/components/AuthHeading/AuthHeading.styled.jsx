import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    border-bottom: 1px solid #454545;
    display: flex;
    gap: 47px;
    height: 75px;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 1200px) {
    border-bottom: 1px solid #454545;
    display: flex;
    gap: 47px;
    height: 90px;
    justify-content: center;
    width: 100%;
  }
`;

const AuthBtn = styled.button`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-color: initial;
    border: none;
    color: var(--main-text-color);
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    line-height: 133%;
    padding-top: 10px;
    text-transform: uppercase;
    position: relative;

    .underline {
    }
  }

  @media (min-width: 1200px) {
    background-color: initial;
    border: none;
    color: var(--main-text-color);
    cursor: pointer;
    font-size: 20px;
    font-weight: 800;
    line-height: 133%;
    padding-top: 10px;
    text-transform: uppercase;
    position: relative;
  }
`;

const Underline = styled.div`
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-color: var(--main-green-color);
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  @media (min-width: 1200px) {
    background-color: var(--main-green-color);
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export { Wrapper, AuthBtn, Underline };
