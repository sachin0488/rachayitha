import Link from "next/link";
import React from "react";
import { GenreName } from "../../hooks/useGenreButton";
import {
  GenreButtonListMobileWrapper,
  GenreButtonsMobile,
} from "./GenreButtonListStyle";
const GenreButtonLIstMobile = ({ explore, section }) => {
  return (
    <>
      <GenreButtonListMobileWrapper>
        {GenreName.map((button) => (
          <Link href={`/${explore}?lead=male&genre=${button.name}`}>
            <GenreButtonsMobile
              className={
                window.location.pathname + window.location.search ==
                `/${explore}?lead=male&genre=${button.name}`
                  ? "genre"
                  : ""
              }
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
