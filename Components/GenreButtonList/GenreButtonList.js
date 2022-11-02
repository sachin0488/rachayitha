import React from "react";
import { GenreName, genreName } from "../../hooks/useGenreButton";
import GenreButton from "../GenreButton/GenreButton";
import { GenreButtonListWrapper } from "./GenreButtonListStyle";
import { useRouter } from "next/router";
const GenreButtonList = () => {
  const router = useRouter();

  const type = router.pathname.split("/")[1];

  return (
    <GenreButtonListWrapper>
      {type === "explore"
        ? GenreName.map((platform) => (
            <GenreButton
              explore="explore/novel"
              platformApi={platform.name}
              platformButton={platform.buttonName}
            />
          ))
        : genreName.map((platform) => (
            <GenreButton
              explore="ranking/novel"
              platformApi={platform.name}
              platformButton={platform.buttonName}
            />
          ))}
    </GenreButtonListWrapper>
  );
};

export default GenreButtonList;
