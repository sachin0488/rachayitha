import React, { useState } from "react";
import GenreButtonList from "../../Components/GenreButtonList/GenreButtonList";
import MuiAccordion from "../../Components/MuiAccordion/MuiAccordion";
import MuiGenreLeadTab from "../../Components/MuiTabs/MuiGenreLeadTab";
import { genreLeadMuiTabList } from "../../hooks/useMuiTabComp";
import { GenreLeadMuiTab } from "../BookDetail/MuiTabStyles";
import { MaleAndFemaleLeadContainer } from "../Explore/ExploreStyle";

export const RankingTextAndNestedRoute = [
  {
    text: "Novel Ranking",
    explore: "ranking/novel",
    section: "novel",
    high: "",
  },
  {
    text: "Poems Ranking",
    explore: "ranking/poem",
    section: "poem",
    high: "",
  },
  {
    text: "Shorts Ranking",
    explore: "ranking/short",
    section: "short",
    high: "",
  },
];

export const ExploreTextAndNestedRoute = [
  {
    text: "Genre of Novels",
    explore: "explore/novel",
    section: "novel",
    high: "480px",
  },
  {
    text: "Genre of Poems",
    explore: "explore/poem",
    section: "poem",
    high: "480px",
  },
  {
    text: "Genre of Shorts",
    explore: "explore/short",
    section: "short",
    high: "480px",
  },
];

const RankingAccordionContainer = ({ text, high, explore, section }) => {
  const [genreLead, setGenreLead] = useState("female");
  return (
    <>
      <MuiAccordion text={text} high={high}>
        <>
          <MaleAndFemaleLeadContainer>
            <MuiGenreLeadTab
              muiTab={genreLeadMuiTabList}
              styles={GenreLeadMuiTab}
              setGenreLead={setGenreLead}
            />
          </MaleAndFemaleLeadContainer>
          <GenreButtonList
            explore={explore}
            section={section}
            genreLead={genreLead}
          />
        </>
      </MuiAccordion>
    </>
  );
};

export default RankingAccordionContainer;
