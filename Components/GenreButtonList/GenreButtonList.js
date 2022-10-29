import React from "react";
import useGenreButton from "../../hooks/useGenreButton";
import GenreButton from "../GenreButton/GenreButton";
import GenreButtonListStyle from "./GenreButtonListStyle";
const GenreButtonList = () => {
  const { GenreName } = useGenreButton();
  const { GenreButtonListWrapper } = GenreButtonListStyle();
  return (
    <GenreButtonListWrapper>
      {GenreName.map((platform) => (
        <GenreButton
          platformApi={platform.name}
          platformButton={platform.buttonName}
        />
      ))}
    </GenreButtonListWrapper>
  );
};

export default GenreButtonList;
