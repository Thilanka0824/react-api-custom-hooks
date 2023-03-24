import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return {
    value: value,
    onChange: onChangeHandler,
    placeholder: initialValue,
  };
};

export default useInput;
