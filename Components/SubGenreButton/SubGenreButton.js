import React from "react";
import { ButtonContainer, Buttons } from "../../Container/Explore/ExploreStyle";
import { genreName } from "../../hooks/useGenreButton";
import { useRouter } from "next/router";
import Link from "next/link";
import HandleGenreButtonColor from "../GenreButton/HandleGenreButtonColor";
const SubGenreButton = ({ sectionName }) => {
  const router = useRouter();
  const fullSection = router.pathname;
  const { handleColor } = HandleGenreButtonColor();
  const { genre } = router.query;

  return (
    <>
      <ButtonContainer>
        {genreName?.map((button, index) => (
          <Link
            href={`${fullSection}?lead=female&genre=${genre}&sub_genre=${button.name}`}
          >
            <Buttons
              style={{
                backgroundColor: handleColor("", button.name, sectionName)[0],
                color: handleColor("", button.name, sectionName)[1],
              }}
            >
              {button.buttonName}
            </Buttons>
          </Link>
        ))}
      </ButtonContainer>
    </>
  );
};

export default SubGenreButton;
