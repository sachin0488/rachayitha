import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ExploreContext } from "../../../Providers/ExploreProvider";
import Explore from "../../../Container/Explore/Explore";

const genre = () => {
  const { currentRoute, setCurrentRoute } = useContext(ExploreContext);
  useEffect(() => {
    setCurrentRoute(genreName);
  }, [genreName]);
  const router = useRouter();
  const genreName = router.query.genre;
  return (
    <>
      <Explore />
    </>
  );
};

export default genre;
