import React from "react";
import "./App.css";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CodeMirror
        options={{
          mode: "xml",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
    );
  }
}

export default App;
