import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GenreTitle, MenuItem } from "./ExploreStyle";
import { useRouter } from "next/router";

const LinkContainer = ({ href, img_url, genretitle }) => {
  const router = useRouter();
  return (
    <>
      <Link href={href}>
        <MenuItem>
          <Image src={img_url} />
          <GenreTitle
            className={
              window.location.pathname + window.location.search === `${href}`
                ? "explore"
                : ""
            }
          >
            {genretitle}
          </GenreTitle>
        </MenuItem>
      </Link>
    </>
  );
};

export default LinkContainer;
