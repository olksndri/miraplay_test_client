import {
  Section,
  NotFoundBox,
  NotFoundCircle,
  NotFoundTitle,
  NotFoundText,
  NotFoundBtn,
} from "./NotFound.styled";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <NotFoundBox>
        <NotFoundCircle>
          <span>!</span>
        </NotFoundCircle>
        <NotFoundTitle>Помилка</NotFoundTitle>
        <NotFoundText>Упс, такої сторінки не існує!</NotFoundText>
        <NotFoundBtn onClick={() => navigate("/")}>На головну</NotFoundBtn>
      </NotFoundBox>
    </Section>
  );
};
