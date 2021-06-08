import React, { useEffect, useState } from "react"
import '@contentstack/venus-components/build/main.css'

import { JsonRTE } from "@contentstack/venus-components";
const initialValue = [
  {
    "children": [
      {
        "children": [
          {
            "text": ""
          }
        ],
        "attrs" : {},
        "type": "p",
        "uid": "a2cef1e6eadf4742839d37229363337d"
      }
    ],
    "type": "doc",
    "uid": "24a7f262fbbb4c6392acba63059a29ae",
    "attrs" : {}
  }
]
function App(props) {
  const { extension } = props;
  const [val, setVal] = useState([])
  const onChange = (val) => {
    extension.field.setData(val)

  }
  useEffect(() => {
    var value = extension.field.getData()
    if (Object.entries(value).length === 0) {
      value = initialValue
      extension.field.setData(value)
      setVal(value)
    } else {
      setVal(value)
    }
  }, [])
  return (
    <div className="App">
      <JsonRTE value={val} toolbarMode={extension.config.toolbarMode} onChange={onChange} requestProps={extension.config} hideToolBarOnBlur={false} />
    </div>
  );
}

export default App;
