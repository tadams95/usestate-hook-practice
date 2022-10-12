import React, { useState } from "react";

function App() {

const now = new Date().toLocaleTimeString('en-US')

const [time, getTime] = useState(now);

function showTime() {

  const newTime = new Date().toLocaleTimeString();
getTime(newTime);

}



  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
