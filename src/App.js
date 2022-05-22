import React from "react";
import Card from "./components/Card";
import Attribution from "./components/Attribution";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Card/>
      <Attribution/>
    </div>
  );
}

export default App;
