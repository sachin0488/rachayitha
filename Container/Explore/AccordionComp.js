import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GenreButtonList from "../../Components/GenreButtonList/GenreButtonList";

export default function SimpleAccordion({ text, high }) {
  const styles = {
    genreHeading: {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "23px",
      letterSpacing: "0.1px",
      display: "flex",
      justifyContent: "center",
    },
    horizontalRuleComp: {
      borderTop: "1px solid #E7E7E7",
    },
  };
  return (
    <div>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "#5426C3", fontSize: "32px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={styles.genreHeading}>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ height: high }}>
          <GenreButtonList />
        </AccordionDetails>
      </Accordion>
      <div style={styles.horizontalRuleComp}></div>
    </div>
  );
}
