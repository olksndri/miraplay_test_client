import styled from "styled-components";
import headBg from "../../assets/images/head-bg.png";

const Section = styled.section`
  background: url(${headBg});
  background-size: cover;
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const NotFoundBox = styled.div`
  background: #242424;
  border: 1px solid #454545;
  border-radius: 10px;
  flex-direction: column;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  opacity: 1;
  padding: 48px 32px 32px;
  position: relative;
  transition: all 0.2s ease-in-out;
  z-index: 500;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const NotFoundCircle = styled.div`
  background-color: red;
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 45px;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: -24px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 45px;
  color: white;
  font-size: 30px;
`;

const NotFoundTitle = styled.h4`
  color: var(--main-text-color);
  font-size: 14px;
  font-weight: 800;
  line-height: 143%;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const NotFoundText = styled.p`
  color: var(--second-text-color);
  font-size: 14px;
  font-weight: 600;
  max-width: 500px;
  text-align: center;
`;

const NotFoundBtn = styled.button`
  background-color: var(--main-green-color);
  border: 1px solid var(--main-green-color);
  border-radius: 8px;
  color: var(--main-text-color);
  padding: 10px 30px;
  transition: all 0.1s linear;
  outline: none;
  margin-top: 25px;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

export {
  Section,
  NotFoundBox,
  NotFoundCircle,
  NotFoundTitle,
  NotFoundText,
  NotFoundBtn,
};
