const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "56px",
    fontFamily: "Arial, sans-serif",
    borderColor: state.isFocused ? "#ccc" : "#ccc",
    boxShadow: state.isFocused ? "0 0 0 1px #ccc" : "none",
    "&:hover": {
      borderColor: state.isFocused ? "#aaa" : "#ccc",
    },
    marginTop: "12px",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: "18.5px 14px",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#aaa",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "black" : "black",
    overflow: "visible",
  }),
};

export default customSelectStyles;