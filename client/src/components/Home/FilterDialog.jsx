import React from "react";
import Slider from "@mui/material/Slider";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import { Rating, FormControlLabel, Checkbox } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const FilterDialog = ({
  filter,
  handleChange,
  handleClearFilter,
  open,
  handleClose,
}) => {
  const [roomType, setRoomType] = React.useState(filter.roomType);
  const handleRoomTypeChange = (event) => {
    handleChange(event);
    setRoomType(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Grid container spacing={8} columns={4} justifyContent="center">
          <Grid item xs={3}>
            <h3>Filter Options</h3>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon color="black" />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <form>
          <div className="mb-3">
            <label htmlFor="priceRange" className="form-label">
              Price Range:
            </label>
            <Slider
              name="priceRange"
              value={filter.priceRange}
              onChange={handleChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value} $`}
              max={10000}
              min={0}
              disableSwap
            />
          </div>
          <div className="mb-3">
            <FormControl fullWidth>
              <InputLabel id="roomType">Room Type</InputLabel>
              <Select
                name="Room Type"
                label="Room Type"
                onChange={handleRoomTypeChange}
                value={roomType}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="double">Double</MenuItem>
                <MenuItem value="suite">Suite</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-3">
            <label htmlFor="star" className="form-label">
              Number of Stars
            </label>
            <div>
              <Rating
                name="star"
                size="large"
                precision={1}
                value={filter.star}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Facility Amenities</label>
            <div>
              <div>
                <FormControlLabel
                  label="Pool"
                  control={
                    <Checkbox
                      name="poolAmenity"
                      checked={filter.poolAmenity}
                      onChange={handleChange}
                    />
                  }
                />
              </div>
              <div>
                <FormControlLabel
                  label="Internet"
                  control={
                    <Checkbox
                      name="internetAmenity"
                      checked={filter.internetAmenity}
                      onChange={handleChange}
                    />
                  }
                />
              </div>
              <div>
                <FormControlLabel
                  label="Gym"
                  control={
                    <Checkbox
                      name="gymAmenity"
                      checked={filter.gymAmenity}
                      onChange={handleChange}
                    />
                  }
                />
              </div>
              <div>
                <FormControlLabel
                  label="Car Park"
                  control={
                    <Checkbox
                      name="parkAmenity"
                      checked={filter.parkAmenity}
                      onChange={handleChange}
                    />
                  }
                />
              </div>
              <div>
                <FormControlLabel
                  label="Air Conditioning"
                  control={
                    <Checkbox
                      name="airAmenity"
                      checked={filter.airAmenity}
                      onChange={handleChange}
                    />
                  }
                />
              </div>
              <div
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleClearFilter}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    marginLeft: "auto", // Yeni satır
                  }}
                >
                  Clear Filter
                </Button>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
