import React from "react";
import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div style={styles.container}>
      <img src={spinner} style={styles.image} />
    </div>
  );
};

const styles = {
  image: { width: 25, height: 25, objectFit: "contain" },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Spinner;
