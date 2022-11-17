import React from "react";
import NovelImg from "../../public/novel.svg";
import PoemImg from "../../public/poem.png";
import ShortImg from "../../public/shorts.svg";
import Image from "next/image";
import Link from "next/link";
import { GenreTitle, MenuItem } from "../Explore/ExploreStyle";
export const RankingLinkList = [
  {
    href: "/ranking/novel",
    img_url: NovelImg,
    genretitle: "Novels",
  },
  {
    href: "/ranking/short",
    img_url: ShortImg,
    genretitle: "Shorts",
  },
  {
    href: "/ranking/poem",
    img_url: PoemImg,
    genretitle: "Poems",
  },
];

export const ExploreLinkList = [
  {
    href: "/explore/novel?lead=female&genre=all&sub_genre=power",
    img_url: NovelImg,
    genretitle: "Novels",
  },
  {
    href: "/explore/short?lead=female&genre=all&sub_genre=power",
    img_url: ShortImg,
    genretitle: "Shorts",
  },
  {
    href: "/explore/poem?lead=female&genre=all&sub_genre=power",
    img_url: PoemImg,
    genretitle: "Poems",
  },
];

const RankingLinksContainer = ({ href, img_url, genretitle }) => {
  return (
    <>
      <Link href={href}>
        <MenuItem>
          <Image src={img_url} />
          <GenreTitle>{genretitle}</GenreTitle>
        </MenuItem>
      </Link>
    </>
  );
};

export default RankingLinksContainer;
