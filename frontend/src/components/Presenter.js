import React, { useState } from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  panel: {
    backgroundColor: theme.palette.primary.light,
  },
  expandedPanel: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Presenter() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        classes={{ expanded: classes.panel, root: classes.panel }}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMore />}
          classes={{ expanded: classes.expandedPanel }}
        >
          <Typography variant="h6">Nacimiento</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            lorem input asas asd asc scd asd sa as x asd asd ax asas d
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        classes={{ expanded: classes.panel, root: classes.panel }}
      >
        <ExpansionPanelSummary
          aria-control="panel2d-content"
          id="panel2d-header"
          expandIcon={<ExpandMore />}
          classes={{ expanded: classes.expandedPanel }}
        >
          <Typography variant="h6">Objetivos</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            lorem input asas asd asc scd asd sa as x asd asd ax asas d
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        classes={{ expanded: classes.panel, root: classes.panel }}
      >
        <ExpansionPanelSummary
          aria-control="panel3d-content"
          id="panel3d-header"
          expandIcon={<ExpandMore />}
          classes={{ expanded: classes.expandedPanel }}
        >
          <Typography variant="h6">Metas</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            lorem input asas asd asc scd asd sa as x asd asd ax asas d
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        classes={{ expanded: classes.panel, root: classes.panel }}
      >
        <ExpansionPanelSummary
          aria-control="panel4d-content"
          id="panel4d-header"
          expandIcon={<ExpandMore />}
          classes={{ expanded: classes.expandedPanel }}
        >
          <Typography variant="h6">Fundadores</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            lorem input asas asd asc scd asd sa as x asd asd ax asas d
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Presenter;
