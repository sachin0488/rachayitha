import React from "react";
import { GenreName, genreName } from "../../hooks/useGenreButton";
import GenreButton from "../GenreButton/GenreButton";
import { GenreButtonListWrapper } from "./GenreButtonListStyle";
import { useRouter } from "next/router";
const GenreButtonList = ({ explore, section, genreLead }) => {
  const router = useRouter();

  const type = router.pathname.split("/")[1];

  return (
    <GenreButtonListWrapper>
      {type === "explore"
        ? GenreName.map((platform) => (
            <GenreButton
              explore={explore}
              section={section}
              platformApi={platform.name}
              width="47%"
              platformButton={platform.buttonName}
              genreLead={genreLead}
            />
          ))
        : genreName.map((platform) => (
            <GenreButton
              explore={explore}
              section={section}
              width="47%"
              platformApi={platform.name}
              platformButton={platform.buttonName}
              genreLead={genreLead}
            />
          ))}
    </GenreButtonListWrapper>
  );
};

export default GenreButtonList;
