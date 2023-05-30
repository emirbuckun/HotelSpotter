import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";

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

const PastReservations = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePostComment = () => {
    setOpen(false);
  };
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <List sx={{ width: "50%", bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start" divider={true}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <img
                  alt="complex"
                  src="https://hotel-su-antalya.hotel-ds.com/data/Imgs/700x500/11087/1108736/1108736295/hotel-su-antalya-img-1.JPEG"
                  style={{
                    width: "128px",
                    height: "128px",
                    borderRadius: "5%",
                  }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Hotel Antalya Lux Comfort
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Check in: 2021-10-10
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Check out: 2021-10-15
                  </Typography>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    <Typography variant="body2" gutterBottom>
                      Add comment
                    </Typography>
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <List
                      id="comment-list"
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
                              <Typography id="hotelName" variant="h6">
                                Antalya Lux Comfort Hotel
                              </Typography>
                            </>
                          }
                          secondary={
                            <>
                              <div>
                                <StyledRating
                                  id="rating"
                                  name="highlight-selected-only"
                                  IconContainerComponent={IconContainer}
                                  getLabelText={(value) =>
                                    customIcons[value].label
                                  }
                                  highlightSelectedOnly
                                />
                              </div>
                              <div>
                                <Grid container spacing={2}>
                                  <Grid item xs={16}>
                                    <TextField
                                      id="outlined-multiline-flexible"
                                      label="Comment"
                                      multiline
                                      fullWidth
                                      maxRows={4}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <Button
                                      variant="outlined"
                                      onClick={handlePostComment}
                                    >
                                      <Typography variant="body2" gutterBottom>
                                        Post Comment
                                      </Typography>
                                    </Button>
                                  </Grid>
                                </Grid>
                              </div>
                            </>
                          }
                        />
                      </ListItem>
                    </List>
                  </Dialog>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  $19.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </div>
  );
};

export default PastReservations;
