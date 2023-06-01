import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
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

const HotelComment = (id) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <List
            id="comment-list"
            subheader={<Typography variant="h5">Comments</Typography>}
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              id="comment-list-item"
              alignItems="flex-start"
              divider={true}
            >
              <ListItemText
                primary={
                  <>
                    <Typography id="name" variant="h6">
                      John Doe
                    </Typography>
                    <Typography id="date" variant="body2">
                      2021-10-10
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <div>
                      <StyledRating
                        id="rating"
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
                        id="comment"
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </Typography>
                    </div>
                  </>
                }
              />
            </ListItem>
            <ListItem
              id="comment-list-item"
              alignItems="flex-start"
              divider={true}
            >
              <ListItemText
                primary={
                  <>
                    <Typography id="name" variant="h6">
                      John Doe
                    </Typography>
                    <Typography id="date" variant="body2">
                      2021-10-10
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <div>
                      <StyledRating
                        id="rating"
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
                        id="comment"
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </Typography>
                    </div>
                  </>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default HotelComment;
