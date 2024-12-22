import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./top100Films";
import "../App.css";
import { Button } from "@mui/material";

function CustomAutocomplete() {
  const names = ["clint", "aalok", "sarah", "james", "john"];

  return (
    <>
      <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.label}
        defaultValue={[top100Films[5]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={names}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Names" />}
      />

      <Button onClick={showBackDrop} variant="contained">
        Show the backdrop
      </Button>
    </>
  );
}

export default CustomAutocomplete;
