import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GenreTitle, MenuItem } from "../../Container/Explore/ExploreStyle";

const LinkContainer = ({ href, img_url, genretitle }) => {
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

export default LinkContainer;
