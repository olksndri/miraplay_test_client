import {
  Wrapper,
  Form,
  Title,
  SubTitle,
  Input,
  Label,
  SubmitBtn,
} from "./AuthForm.styled";
// const passwordVisibility = (evt, id) => {
//   const passwordInput = document.getElementById(`${id}`);
//   const visibleIcon = evt.currentTarget.firstElementChild;
//   const nonVisibleIcon = visibleIcon.nextElementSibling;

//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//     visibleIcon.classList.toggle("hidden");
//     nonVisibleIcon.classList.toggle("hidden");
//   } else {
//     passwordInput.type = "password";
//     visibleIcon.classList.toggle("hidden");
//     nonVisibleIcon.classList.toggle("hidden");
//   }
// };

export const AuthForm = ({ isRegister = false }) => {
  //   const dispatch = useDispatch();

  // const onSubmitRegister = (evt) => {
  //   evt.preventDefault();
  // };

  // const onSubmitLogin = (evt) => {
  //   evt.preventDefault();
  // };

  // const onClickPasswordVisibility = (evt) => {
  //   passwordVisibility(evt, "regPasswordInput");
  // };

  return (
    <Wrapper>
      <Form>
        <Title>Спробуй нові відчуття</Title>
        <SubTitle>
          {isRegister ? "Зареєструйся" : "Увійди"}, щоб грати на максималках в
          свої улюблені ігри
        </SubTitle>
        <Label for="email">Введіть ваш email:</Label>
        <Input
          name="email"
          id="email"
          placeholder="YOUREMAIL@MIRAPLAY.COM"
        ></Input>
        <Label for="password">Введіть ваш пароль:</Label>{" "}
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="ВАШ ПАРОЛЬ"
        ></Input>
        <SubmitBtn>{isRegister ? "Реєстрація" : "Вхід"}</SubmitBtn>
      </Form>
    </Wrapper>
  );
};
