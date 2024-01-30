import React, { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";

import QrCodeView from "./Containers/Home/QrCodeView";

import "./App.css";
import "monday-ui-react-core/dist/main.css";

const monday = mondaySdk();

const App = () => {
  const [context, setContext] = useState();

  useEffect(() => {
    monday.execute("valueCreatedForUser");

    monday.listen("context", (res) => {
      setContext(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h2 className="header">SCAN ME</h2>
        </div>
        <div className="row">
          <QrCodeView />
        </div>
      </div>
    </div>
  );
};

export default App;
