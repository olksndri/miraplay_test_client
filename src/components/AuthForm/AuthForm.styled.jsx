import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    background: #181818;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    transition: all 0.4s ease-in;
    width: 100%;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 10px 115px;
  }
`;

const Form = styled.form`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 20px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 10px 115px;
    align-items: center;
  }
`;

const Title = styled.h3`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    color: var(--main-text-color);
    font-size: 16px;
    font-weight: 800;
    line-height: 164%;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  @media (min-width: 1200px) {
    color: var(--main-text-color);
    font-size: 22px;
    font-weight: 800;
    line-height: 164%;
    margin-bottom: 16px;
    text-transform: uppercase;
  }
`;

const SubTitle = styled.h3`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    color: #afafaf;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 25px;
    width: 90%;
  }

  @media (min-width: 1200px) {
    color: #afafaf;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 40px;
    max-width: 370px;
  }
`;

const Input = styled.input`
  outline: none;

  &:focus,
  &:active {
    border-color: var(--main-green-color);
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    background: #1c1c1c;
    border: 1px solid #454545;
    border-radius: 10px;
    color: var(--main-text-color);
    display: flex;
    font-size: 16px;
    font-weight: 300;
    height: 46px;
    margin-bottom: 25px;
    margin-top: 14px;
    padding: 20px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    background: #1c1c1c;
    border: 1px solid #454545;
    border-radius: 10px;
    color: var(--main-text-color);
    font-size: 16px;
    font-weight: 300;
    height: 70px;
    margin-bottom: 40px;
    margin-top: 14px;
    padding: 25px;
    width: 370px;
  }
`;

const Label = styled.label`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    color: var(--main-text-color);
    font-size: 12px;
    font-weight: 800;
    line-height: 1.5;
    position: relative;
    text-transform: uppercase;
    width: 90%;
  }

  @media (min-width: 1200px) {
    color: var(--main-text-color);
    font-size: 12px;
    font-weight: 800;
    line-height: 1.5;
    position: relative;
    text-transform: uppercase;
  }
`;

const SubmitBtn = styled.button`
  text-transform: uppercase;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background: var(--main-green-color);
    border: none;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(63, 156, 20, 0.3);
    color: var(--main-text-color);
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    height: 50px;
    line-height: 143%;
    margin-top: 25px;
    transition: all 0.2s ease-in-out;
    width: 100%;
  }

  @media (min-width: 1200px) {
    background: var(--main-green-color);
    background-position: 0;
    border: none;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(63, 156, 20, 0.3);
    color: var(--main-text-color);
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    height: 70px;
    line-height: 143%;
    transition: all 0.2s ease-in-out;
    transition: background 0.3s ease-in-out;
    width: 370px;
  }
`;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export { Wrapper, Form, Title, SubTitle, Input, Label, SubmitBtn, InputWrap };
