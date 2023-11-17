import styled from "styled-components";

const GameCardItem = styled.li`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    background: #1c1c1c;
    border: 1px solid #454545;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 565px;
    justify-content: flex-end;
    margin: 0 auto;
    opacity: 1;
    outline: none;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in;
    width: 90vw;
    height: 495px;
  }

  @media (min-width: 1200px) {
    background: #1c1c1c;
    border: 1px solid #454545;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 565px;
    justify-content: flex-end;
    opacity: 1;
    outline: none;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in;
    width: 370px;
    height: 495px;
  }
`;

const GameCardImage = styled.img`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    border-radius: 20px 20px 0 0;
    height: 335px;
    min-height: 335px;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  @media (min-width: 1200px) {
    border-radius: 20px 20px 0 0;
    height: 335px;
    min-height: 335px;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;

const GameCardBottomWrap = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    height: 100%;
    padding: 15px 32px 32px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    padding: 32px;
    width: 101%;
  }
`;

const GameCardTitle = styled.h4`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    color: var(--main-text-color);
    font-size: 18px;
    font-weight: 800;
    line-height: 164%;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  @media (min-width: 1200px) {
    color: var(--main-text-color);
    font-size: 22px;
    font-weight: 800;
    line-height: 36px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }
`;

const GameCardDescription = styled.h4`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    color: var(--second-text-color);
    font-size: 12px;
    font-weight: 300;
    height: 80px;
    line-height: 18px;
  }

  @media (min-width: 1200px) {
    color: var(--second-text-color);
    font-size: 12px;
    font-weight: 300;
    height: 80px;
    line-height: 18px;
  }
`;

const GameCardGenre = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    gap: 8px;
    left: 20px;
    position: absolute;
    top: 20px;
  }

  @media (min-width: 1200px) {
    display: flex;
    gap: 8px;
    left: 20px;
    position: absolute;
    top: 20px;
  }
`;

const GameCardTopItem = styled.p`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: var(--main-text-color);
    display: flex;
    padding: 5px 10px;
    -webkit-backdrop-filter: blur(10px);
    background: var(--main-green-color);
  }

  @media (min-width: 1200px) {
    -webkit-backdrop-filter: blur(10px);
    background: var(--main-green-color);
    align-items: center;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: var(--main-text-color);
    display: flex;
    padding: 5px 10px;
  }
`;

const GameCardGenreItem = styled.p`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: var(--main-text-color);
    display: flex;
    padding: 5px 10px;
    -webkit-backdrop-filter: blur(10px);
    background: rgba(12, 5, 32, 0.25);
  }

  @media (min-width: 1200px) {
    -webkit-backdrop-filter: blur(10px);
    background: rgba(12, 5, 32, 0.25);
    align-items: center;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: var(--main-text-color);
    display: flex;
    padding: 5px 10px;
  }
`;

const GameCardfFreeItem = styled.p`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    background: var(--main-green-color);
    border-radius: 10px;
    color: var(--main-text-color);
    display: flex;
    padding: 5px 10px;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  @media (min-width: 1200px) {
    align-items: center;
    background: var(--main-green-color);
    border-radius: 10px;
    color: var(--main-text-color);
    display: flex;
    padding: 5px 10px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

const GameCardLaunchersList = styled.ul`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    gap: 3px;
    left: 10px;
    position: absolute;
    top: 265px;
  }

  @media (min-width: 1200px) {
    display: flex;
    gap: 3px;
    left: 10px;
    position: absolute;
    top: 260px;
  }
`;

const GameCardLaunchersItem = styled.li`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    background-color: #1c1c1c;
    border-radius: 50%;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  @media (min-width: 1200px) {
    align-items: center;
    background-color: #1c1c1c;
    border-radius: 50%;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }
`;

const GameCardLaunchersItemIcon = styled.svg`
  transform: scale(1.2);
  @media screen and (min-width: 320px) and (max-width: 767px) {
    height: 25px;
    width: 25px;
  }

  @media (min-width: 1200px) {
    height: 25px;
    width: 25px;
  }
`;

export {
  GameCardItem,
  GameCardImage,
  GameCardBottomWrap,
  GameCardTitle,
  GameCardDescription,
  GameCardGenre,
  GameCardTopItem,
  GameCardGenreItem,
  GameCardfFreeItem,
  GameCardLaunchersList,
  GameCardLaunchersItem,
  GameCardLaunchersItemIcon,
};
