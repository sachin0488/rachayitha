import * as React from "react";
import {
  AccordionDashBoardComp,
  AccordionSummaryDashBoardComp,
  AccordionDetailsDashBoardComp,
  GenreHeadingDashBoardComp,
  HorizontalRuleDashBoardComp,
} from "./MuiAccordionStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuiAccordionDashBoard({ text, high, children }) {
  return (
    <>
      <AccordionDashBoardComp>
        <AccordionSummaryDashBoardComp
          expandIcon={
            <ExpandMoreIcon style={{ color: "#5426C3", fontSize: "32px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <GenreHeadingDashBoardComp>{text}</GenreHeadingDashBoardComp>
        </AccordionSummaryDashBoardComp>
        <AccordionDetailsDashBoardComp sx={{ height: high }}>
          {children}
        </AccordionDetailsDashBoardComp>
      </AccordionDashBoardComp>
      <HorizontalRuleDashBoardComp></HorizontalRuleDashBoardComp>
    </>
  );
}
