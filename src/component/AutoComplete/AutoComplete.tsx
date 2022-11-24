import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import "./AutoComplete.css";

const AutoComplete = ({ setValue }: any) => {
  const [input, setInput] = useState([]);

  const onTagsChange = (event: any, values: any) => {
    setInput(values);
  };
  setValue(input);
  return (
    <div>
      <Autocomplete
        multiple
        options={option}
        getOptionLabel={(option) => option.title}
        onChange={onTagsChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            margin="normal"
            fullWidth
            size="small"
          />
        )}
      />
    </div>
  );
};
const option = [
  { title: "Tất cả" },
  { title: "Khám răng hàm mặt" },
  { title: "Khám tai mũi họng" },
  { title: "Khám mắt" },
  { title: "Khám tổng quát" },
  { title: "Khám tim mạch" },
  { title: "Khám sản phụ khoa" },
];

export default AutoComplete;
