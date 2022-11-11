import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  ContentType,
  ContentTypeText,
  FilterText,
  GenreMenuBar,
  LeftSideGenreMenuBar,
  RightSideGenreMenuBar,
} from "../../Container/Explore/ExploreStyle";
import LinkContainer from "../LinksContainer/LinkContainer";
import MuiSelect from "./MuiSelect";

const GenreMenuBarComp = ({ sectionName }) => {
  const menuItems = [
    {
      name: "novel",
      value: "NO",
    },
    {
      name: "poem",
      value: "PO",
    },
  ];
  const contentStatus = [
    {
      name: "novel",
      value: "NO",
    },
    {
      name: "poem",
      value: "PO",
    },
  ];
  return (
    <>
      <GenreMenuBar>
        <LeftSideGenreMenuBar>
          {sectionName.map((list) => (
            <LinkContainer
              href={list.href}
              img_url={list.img_url}
              genretitle={list.genretitle}
            />
          ))}
        </LeftSideGenreMenuBar>
        <RightSideGenreMenuBar>
          <FilterText>Filter by</FilterText>
          <ContentType>
            <MuiSelect label="content type" menuItems={menuItems} />
          </ContentType>

          <ContentType>
            <MuiSelect label="content Status" menuItems={contentStatus} />
          </ContentType>
        </RightSideGenreMenuBar>
      </GenreMenuBar>
    </>
  );
};

export default GenreMenuBarComp;
