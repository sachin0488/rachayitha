import Link from "next/link";
import { GenreButtons, GenreButtonWrapper } from "./GenreButtonStyle";
import HandleGenreButtonColor from "./HandleGenreButtonColor";
const GenreButton = (props) => {
  const { handleColor } = HandleGenreButtonColor();
  console.log(props.genreLead, "genreLead");
  return (
    <>
      <GenreButtonWrapper style={{ width: props.width }}>
        <Link
          href={`/${props.explore}?lead=${props.genreLead}&genre=${props.platformApi}`}
        >
          <GenreButtons
            style={{
              backgroundColor: handleColor(
                "all",
                props.platformApi,
                props.section
              )[0],
              color: handleColor("all", props.platformApi, props.section)[1],
            }}
          >
            {props.platformButton}
          </GenreButtons>
        </Link>
      </GenreButtonWrapper>
    </>
  );
};

export default GenreButton;
