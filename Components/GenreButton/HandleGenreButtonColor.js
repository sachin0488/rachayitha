import { useRouter } from "next/router";
import { useEffect } from "react";

const HandleGenreButtonColor = () => {
  const router = useRouter();
  const { genre, sub_genre } = router.query;
  const section = router.pathname.split("/")[2];
  //fixme: ""
  //   useEffect(() => {
  //     console.log(sub_genre, "skdjkdsksd ksdjkdskjskjksd");
  //   }, [sub_genre]);
  const handleColor = (initialGenre, apiRoute, sectionName) => {
    if (genre || sub_genre) {
      if (
        (apiRoute === genre || apiRoute === sub_genre) &&
        section === sectionName
      ) {
        console.log(apiRoute, sub_genre);

        return ["#5528C4", "white"];
      } else {
        return ["white", "black"];
      }
    }
    if (apiRoute === initialGenre) return ["#5528C4", "white"];
    return ["white", "black"];
  };
  return { handleColor };
};

export default HandleGenreButtonColor;
