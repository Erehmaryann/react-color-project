import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto -5.8px",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
      margin: "0 auto -6.0px",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "8%",
      margin: "0 auto -6.0px",
    },
  },
  boxContent: {
    padding: "10px",
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.6)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
