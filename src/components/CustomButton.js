import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#4f25f7",
        height: "44px",
        padding: "0 25px",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4f25f7"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

function CustomButton(props){
    return ( 
        <StyledButton variant="contained">{props.txt}</StyledButton>
    );
}

export default CustomButton