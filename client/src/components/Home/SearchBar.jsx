import React, { useState, useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import {
  IconButton,
  Rating,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FilterDialog from "./FilterDialog";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const SearchBar = ({
  filter,
  handleChange,
  handleDateChange,
  handleClearFilter,
  handleSearch,
}) => {
  const [open, setOpen] = React.useState(false);
  const [guestCount, setGuestCount] = React.useState(1);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGuestCountChange = (event) => {
    handleChange(event);
    setGuestCount(event.target.value);
  };

  return (
    <Grid container spacing={8} columns={24} justifyContent="center">
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={handleClickOpen}>
          <TuneIcon style={{ color: "#0288d1", fontSize: 30 }} />
        </IconButton>
        <FilterDialog
          filter={filter}
          handleChange={handleChange}
          handleClearFilter={handleClearFilter}
          open={open}
          handleClose={handleClose}
        />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <TextField
          id="outlined-basic"
          name="searchText"
          value={filter.searchText}
          onChange={handleChange}
          label="Search Hotel"
          variant="outlined"
          size="small"
          fullWidth
          style={{ textAlign: "left", color: "#575454" }}
        />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check In"
            value={filter.checkIn}
            onChange={(newValue, context) => {
              if (context.validationError == null) {
                handleDateChange(newValue, (name = "checkIn"));
              }
            }}
            format="DD/MM/YYYY"
            disablePast
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check Out"
            value={filter.checkOut}
            onChange={(newValue, context) => {
              if (context.validationError == null) {
                handleDateChange(newValue, (name = "checkOut"));
              }
            }}
            format="DD/MM/YYYY"
            disablePast
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <FormControl size="small">
          <InputLabel id="guest-count-label">Guests</InputLabel>
          <Select
            name="Guests"
            label="Guests"
            onChange={handleGuestCountChange}
            value={guestCount}
            fullWidth
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={1}>1 Person</MenuItem>
            <MenuItem value={2}>2 Person</MenuItem>
            <MenuItem value={3}>3 Person</MenuItem>
            <MenuItem value={4}>4 Person</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          onClick={handleSearch}
          sx={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <SearchIcon
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            style={{
              color: "#0288d1",
              fontSize: 30,
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
