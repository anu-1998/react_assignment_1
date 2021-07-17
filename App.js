import React from "react";
import "./styles.css";
import Button from "./Button";
import styles from "./mystyle.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.bigblue}> HELLO WORLD </h1>
      <Button buttonText=" click on me" />
      <Button buttonText="click " />
    </div>
  );
}

export default App;
