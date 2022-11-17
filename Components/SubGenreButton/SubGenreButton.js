import React from "react";
import { ButtonContainer, Buttons } from "../../Container/Explore/ExploreStyle";
import { genreName } from "../../hooks/useGenreButton";
import { useRouter } from "next/router";
import Link from "next/link";
const SubGenreButton = ({ sectionName }) => {
  const router = useRouter();
  const fullSection = router.pathname;

  const { genre } = router.query;

  return (
    <>
      <ButtonContainer>
        {genreName?.map((button, index) => (
          <Link
            href={`${fullSection}?lead=female&genre=${genre}&sub_genre=${button.name}`}
          >
            <Buttons
              className={
                window.location.pathname + window.location.search ===
                `${fullSection}?lead=female&genre=${genre}&sub_genre=${button.name}`
                  ? "genre"
                  : ""
              }
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
