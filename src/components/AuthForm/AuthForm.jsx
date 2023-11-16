import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Report } from "notiflix/build/notiflix-report-aio";
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
import { useQuery } from "@tanstack/react-query";
import { signUp, signIn } from "../../redux/auth/operations";
import {
  signUpPending,
  signUpFulfilled,
  signUpRejected,
  signInPending,
  signInFulfilled,
  signInRejected,
} from "../../redux/auth/slice";

export const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [authBody, setAuthBody] = useState(null);
  const [currErr, setCurrErr] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: result,
    error,
    refetch,
  } = useQuery({
    queryKey: [`${isRegister ? "signup" : "signin"}`, authBody],
    queryFn: () => {
      dispatch(isRegister ? signUpPending() : signInPending());
      return isRegister ? signUp(authBody) : signIn(authBody);
    },
    enabled: false,
    retry: false,
  });

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

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    await setAuthBody({ email, password });
    setCurrErr(true);

    refetch();
  };

  useEffect(() => {
    if (result) {
      dispatch(
        isRegister
          ? signUpFulfilled({ email: result.user.email, token: result.token })
          : signInFulfilled({ email: result.user.email, token: result.token })
      );
      navigate("/games_lib");
    }
    if (error && currErr) {
      const { message } = error.response.data;
      Report.warning(
        `${isRegister ? "Signup" : "Signin"} error`,
        `${message}`,
        "Okay"
      );
      dispatch(isRegister ? signUpRejected() : signInRejected());
      setCurrErr(false);
    }
  }, [result, error, currErr, isRegister, refetch, dispatch, navigate]);

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
            <Label htmlFor="email">Введіть ваш email:</Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="YOUREMAIL@MIRAPLAY.COM"
            ></Input>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="password">Введіть ваш пароль:</Label>
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
