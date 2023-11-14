import {
  Wrapper,
  Form,
  Title,
  SubTitle,
  Input,
  Label,
  SubmitBtn,
  InputWrap,
} from "./AuthForm.styled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import { AuthHeading } from "../AuthHeading/AuthHeading";

import { useState } from "react";

export const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const showPasswordHandler = (e) => {
    setShowPassword(!showPassword);
    const input = e.currentTarget.previousElementSibling;
    if (input.getAttribute("type") === "text") {
      input.setAttribute("type", "password");
    } else {
      input.setAttribute("type", "text");
    }
  };

  const isRegisterHandler = (e) => {
    setIsRegister(!isRegister);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AuthHeading
        isRegister={isRegister}
        isRegisterHandler={isRegisterHandler}
      ></AuthHeading>
      <Wrapper>
        <Form onSubmit={SubmitHandler}>
          <Title>Спробуй нові відчуття</Title>
          <SubTitle>
            {isRegister ? "Зареєструйся" : "Увійди"}, щоб грати на максималках в
            свої улюблені ігри
          </SubTitle>
          <InputWrap>
            <Label for="email">Введіть ваш email:</Label>
            <Input
              name="email"
              id="email"
              placeholder="YOUREMAIL@MIRAPLAY.COM"
            ></Input>
          </InputWrap>
          <InputWrap>
            <Label for="password">Введіть ваш пароль:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="ВАШ ПАРОЛЬ"
            ></Input>
            <IconButton
              onClick={showPasswordHandler}
              sx={{
                padding: "0px",
                "@media screen and (min-width: 320px) and (max-width: 767px)": {
                  position: "absolute",
                  top: "44px",
                  right: "13px",
                },
                "@media (min-width: 1200px)": {
                  position: "absolute",
                  top: "58px",
                  left: "335px",
                },
              }}
            >
              <VisibilityIcon
                sx={{
                  fill: showPassword ? "#989898" : "var(--main-green-color)",
                  cursor: "pointer",
                  height: "20px",
                }}
              />
            </IconButton>
          </InputWrap>
          <SubmitBtn>{isRegister ? "Реєстрація" : "Вхід"}</SubmitBtn>
        </Form>
      </Wrapper>
    </>
  );
};
