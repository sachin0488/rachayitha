import * as React from "react";
import {
  AccordionComp,
  AccordionSummaryComp,
  AccordionDetailsComp,
  GenreHeadingComp,
  HorizontalRuleComp,
} from "./MuiAccordionStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuiAccordion({ text, high, children }) {
  return (
    <>
      <AccordionComp>
        <AccordionSummaryComp
          expandIcon={
            <ExpandMoreIcon style={{ color: "#5426C3", fontSize: "32px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <GenreHeadingComp>{text}</GenreHeadingComp>
        </AccordionSummaryComp>
        <AccordionDetailsComp sx={{ height: high }}>
          {children}
        </AccordionDetailsComp>
      </AccordionComp>
      <HorizontalRuleComp></HorizontalRuleComp>
    </>
  );
}
