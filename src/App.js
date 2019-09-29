import React, { useEffect, useState } from "react";
import NavBar from './NavBar'

const App = () => {
  const [value, setValue] = useState(localStorage.getItem("info") || "");

  useEffect(() => {
    localStorage.setItem("info", value);
  }, [value]);

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
<NavBar />

<br />
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>

  );
};

export default App;
