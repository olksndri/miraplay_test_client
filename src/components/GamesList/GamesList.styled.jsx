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

const LoadMoreBtn = styled.button`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-color: #242424;
    border: 1px solid #454545;
    border-radius: 20px;
    color: var(--main-text-color);
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 800;
    height: 60px;
    line-height: 143%;
    margin: 41px auto 0;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.2s ease;
    width: 100%;
  }

  @media (min-width: 1200px) {
    background-color: #242424;
    border: 1px solid #454545;
    border-radius: 20px;
    color: var(--main-text-color);
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 800;
    height: 78px;
    line-height: 143%;
    margin: 41px auto 0;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.2s ease;
    width: 370px;
  }
`;

export { List, LoadMoreBtn };
