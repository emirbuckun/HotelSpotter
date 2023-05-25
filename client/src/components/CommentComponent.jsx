import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function CommentComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <List
            subheader={<Typography variant="h5">Comments</Typography>}
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem alignItems="flex-start" divider={true}>
              <ListItemText
                primary={<Typography variant="h6">John Doe</Typography>}
                secondary={
                  <React.Fragment>
                    <div>
                      <StyledRating
                        name="highlight-selected-only"
                        defaultValue={2}
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                        readOnly
                      />
                    </div>
                    <div>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </Typography>
                    </div>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start" divider={true}>
              <ListItemText
                primary={<Typography variant="h6">John Doe</Typography>}
                secondary={
                  <React.Fragment>
                    <div>
                      <StyledRating
                        name="highlight-selected-only"
                        defaultValue={4}
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                        readOnly
                      />
                    </div>
                    <div>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </Typography>
                    </div>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CommentComponent;
