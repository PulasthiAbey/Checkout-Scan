import React, { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js";

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

  const attentionBoxText = `Hello, your user_id is: ${
    context ? context.user.id : "still loading"
  }.
  Let's start building your amazing app, which will change the world!`;

  return (
    <div className="App">
      <AttentionBox
        title="Hello Monday Apps!"
        text={attentionBoxText}
        type="success"
      />
    </div>
  );
};

export default App;
