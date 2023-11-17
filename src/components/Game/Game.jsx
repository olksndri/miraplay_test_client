import { useSelector } from "react-redux";
import { selectGenre } from "../../redux/games/selectors";
import {
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
} from "./Game.styled";
import sprite from "../../assets/sprite.svg";

const maxTitle = 18;
const maxDescription = 115;
const cropText = (text, max) => `${text.slice(0, max)}...`;

export const Game = ({ props }) => {
  const selectedGenre = useSelector(selectGenre);
  const { imageSrc, title, description, isTop, genre, isFree, launchers } =
    props;

  return (
    <>
      {selectedGenre === genre ||
      selectedGenre === "ALL" ||
      (selectedGenre === "FREE" && isFree) ? (
        <GameCardItem>
          <GameCardImage src={imageSrc} alt="game" loading="lazy" />
          <GameCardBottomWrap>
            <GameCardTitle>
              {title.length > maxTitle ? cropText(title, maxTitle) : title}
            </GameCardTitle>
            <GameCardDescription>
              {description.length > maxDescription
                ? cropText(description, maxDescription)
                : description}
            </GameCardDescription>
          </GameCardBottomWrap>
          <GameCardGenre>
            {isTop && <GameCardTopItem>TOP</GameCardTopItem>}
            <GameCardGenreItem>{genre}</GameCardGenreItem>
          </GameCardGenre>
          {isFree && <GameCardfFreeItem>FREE</GameCardfFreeItem>}
          {launchers.length !== 0 && (
            <GameCardLaunchersList>
              {launchers.map((el) => {
                return (
                  <GameCardLaunchersItem key={el}>
                    <GameCardLaunchersItemIcon width="25" height="25">
                      <use
                        xlinkHref={`${sprite}#icon-${el.toLowerCase()}`}
                      ></use>
                    </GameCardLaunchersItemIcon>
                  </GameCardLaunchersItem>
                );
              })}
            </GameCardLaunchersList>
          )}
          ;
        </GameCardItem>
      ) : (
        <></>
      )}
    </>
  );
};
