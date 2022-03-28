import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { DropdownItem } from "reactstrap";
import Classes from "./style.module.css";
import IntlMessages from "../../helpers/IntlMessages";
import department from "../../data/department";
import { Link } from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Nav, NavItem } from "reactstrap";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,

    backgroundColor: "red",
  },
  "&:before": {
    display: "none",
  },
}));

const Accordion1 = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", marginLeft: "90%" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Nav vertical>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{
          backgroundColor: "#28537f",
          borderColor: "red",
          borderStyle: "none",
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{
            backgroundColor: "#28537f",
            borderColor: "#28537f",
            paddingLeft: "19px",
          }}
        >
          <Typography
            style={{ color: "#1a2733", fontSize: "17px", fontWeight: "bold" }}
            className={Classes.Linktitle}
          >
            <IntlMessages id="dashboards.department" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {department.map((item) => (
            <div key={item.id}>
              <DropdownItem
                href={item.link}
                className={Classes.department_linktitle}
              >
                {item.name}
              </DropdownItem>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion1
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          backgroundColor: "#28537f",
          borderColor: "#28537f",
          marginLeft: "25px",
          fontSize: "20px",
        }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          style={{ backgroundColor: "#28537f" }}
        >
          <Typography
            style={{
              color: "#1a2733",
              fontSize: "17px",
              fontWeight: "bold",
              marginLeft: "-20px",
            }}
            className={Classes.Linktitle}
          >
            <IntlMessages id="dashboards.about" />
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography style={{ marginLeft: "-20px" }}>
            <DropdownItem
              className={Classes.department_linktitle}
              href="/app/dashboards/about/company"
            >
              Company
            </DropdownItem>
          </Typography>

          <DropdownItem
            style={{ marginLeft: "-20px" }}
            className={Classes.department_linktitle}
            href="/app/dashboards/about/news"
          >
            News
          </DropdownItem>
        </AccordionDetails>
      </Accordion1>
    </Nav>
  );
}
