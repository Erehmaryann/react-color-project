import sizes from "./sizes";
import bg from "./bg.svg";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  "@global": {
    ".fade-exist": {
      opacity: "1",
    },
    ".fade-exist-active": {
      opacity: "0",
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "120vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    // eslint-disable-next-line no-dupe-keys
    /* background by SVGBackgrounds.com*/
    backgroundColor: "#2114aa",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
  },
  heading: {
    fontSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("md")]: {
      width: "85%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.2rem",
    },
  },
};
