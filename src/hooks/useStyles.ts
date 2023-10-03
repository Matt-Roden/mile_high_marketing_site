import {makeStyles, Theme} from "@mui/material";

const styles = (theme: Theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.paper
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red", // Specify your desired border color here
        },
      },
    },
  }
};

type StyleType = typeof styles

const useStyles : StyleType = makeStyles((theme: Theme) => (styles(theme)));

export default useStyles;