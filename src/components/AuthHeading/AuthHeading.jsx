import { Wrapper, AuthBtn, Underline } from "./AuthHeading.styled";

export const AuthHeading = ({ isRegister, isRegisterHandler }) => {
  return (
    <Wrapper>
      <AuthBtn onClick={isRegisterHandler}>
        Вхід
        <Underline $visible={!isRegister} />
      </AuthBtn>
      <AuthBtn onClick={isRegisterHandler}>
        Реєстрація
        <Underline $visible={isRegister} />
      </AuthBtn>
    </Wrapper>
  );
};
