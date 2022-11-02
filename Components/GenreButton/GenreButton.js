import Link from "next/link";
import { GenreButtons } from "./GenreButtonStyle";
import { useRouter } from "next/router";

const GenreButton = (props) => {
  const router = useRouter();
  const { genre } = router.query;
  const type = router.pathname.split("/")[2];
  const text = props?.platformButton?.toLowerCase();

  const handleColor = () => {
    console.log(props.platformApi, genre);
    if (genre) {
      if (props.platformApi === genre) {
        return "#5528C4";
      } else {
        return "white";
      }
    }
    if (props.platformApi === "all") return "#5528C4";
    return "white";
  };

  return (
    <>
      <Link href={`/${props.explore}/${props.platformApi}`}>
        <GenreButtons style={{ backgroundColor: handleColor() }}>
          {props.platformButton}
        </GenreButtons>
      </Link>
    </>
  );
};

export default GenreButton;
