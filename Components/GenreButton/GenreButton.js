import { ExploreContext } from "../../Providers/ExploreProvider";
import { useContext } from "react";
import Link from "next/link";
import GenreButtonStyle from "./GenreButtonStyle";

const GenreButton = (props) => {
  const text = props?.platformButton?.toLowerCase();
  const { GenreButtons } = GenreButtonStyle();
  const { platformName, setPlatformName, currentRoute } =
    useContext(ExploreContext);
  const platformRoute = currentRoute;
  const handleColor = () => {
    if (props.platformButton === platformRoute || platformName === text) {
      return "#5528C4";
    } else {
      return "white";
    }
  };

  return (
    <>
      <Link href={`/explore/novel/${props.platformButton}`}>
        <GenreButtons
          onClick={() => {
            setPlatformName(props.platformApi);
          }}
          style={{ backgroundColor: handleColor() }}
        >
          {props.platformButton}
        </GenreButtons>
      </Link>
    </>
  );
};

export default GenreButton;
