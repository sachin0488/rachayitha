import Link from "next/link";
import React from "react";
import { GenreName } from "../../hooks/useGenreButton";
import {
  GenreButtonListMobileWrapper,
  GenreButtonsMobile,
} from "./GenreButtonListStyle";
import HandleGenreButtonColor from "../GenreButton/HandleGenreButtonColor";
const GenreButtonLIstMobile = ({ explore, section }) => {
  const { handleColor } = HandleGenreButtonColor();
  return (
    <>
      <GenreButtonListMobileWrapper>
        {GenreName.map((button) => (
          <Link href={`/${explore}?lead=male&genre=${button.name}`}>
            <GenreButtonsMobile
              style={{
                backgroundColor: handleColor("all", button.name, section)[0],
                color: handleColor("all", button.name, section)[1],
              }}
            >
              {button.buttonName}
            </GenreButtonsMobile>
          </Link>
        ))}
      </GenreButtonListMobileWrapper>
    </>
  );
};

export default GenreButtonLIstMobile;
