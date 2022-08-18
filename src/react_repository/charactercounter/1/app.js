import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function CustomApp() {
  return (
    <div>
      <LetterCount />
    </div>
  );
}

function LetterCount() {
  const CHARACTER_LIMIT = 50;
  const [values, setValues] = React.useState({
    name: "Hello",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className="App">
      <h1>Text Field with character limit</h1>
      <TextField
        label="Limit"
        inputProps={{
          maxlength: CHARACTER_LIMIT,
        }}
        value={values.name}
        helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
        onChange={handleChange("name")}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
}
