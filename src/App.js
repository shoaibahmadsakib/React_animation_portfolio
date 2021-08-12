import React, { useState, useEffect } from "react";
import "./App.css";
import AllComponent from "./components/AllComponent";
import Loder from "./components/Loader/Loder";

const App = () => {
  const [isloder, setisLoder] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoder(false);
    }, 3000);
  }, []);

  return <>{isloder == true ? <Loder /> : <AllComponent />}</>;
};

export default App;
