import React, { useState } from "react";
import { useSelector } from "react-redux";

const App = () => {

 const d = useSelector((state) => state);
 console.log(d)
  return (
    <div className="p-5">
      <h1 className="text-center">Learn Reudx part-2</h1>
     
    </div>
  );
};

export default App;
