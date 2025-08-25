import React, { useState, useEffect } from "react";

const FestivalApp = () => {
  // State to store the current festival name
  const [festival, setFestival] = useState("Diwali");

  // State to store the countdown timer (starting from 5 seconds)
  const [countdown, setCountdown] = useState(5);

  // ---------------------- USEEFFECT EXAMPLES ----------------------

  // Q1: This runs on EVERY render (because no dependency array is given)
  // So, each time the state changes (festival or countdown), this will run
  useEffect(() => {
    console.log("Festival App Rendered");
  });

  // Q2: This runs ONLY ONCE (on first render / component mount)
  // The empty [] dependency means it won’t re-run again
  // Shows a welcome alert when the app loads
  useEffect(() => {
    console.log("Welcome to Diwali Festival App");
    alert("Welcome to Diwali Festival App");
  }, []);

  // Q3: This runs ONLY when the "festival" state changes
  // Helps track which festival the user selected
  useEffect(() => {
    console.log(`Festival changed to ${festival}. Seconds left: ${countdown}`);
  }, [festival]);

  // Q4: Countdown timer with cleanup
  // Starts an interval that decreases countdown every second
  // Cleanup function clears the timer when component unmounts
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Cleanup: stops the timer when component unmounts
    return () => {
      clearInterval(timer);
      console.log("⏱ Timer cleared on unmount");
    };
  }, []);

  // Q5: This runs whenever either "festival" OR "countdown" changes
  // Useful when you want to track multiple state variables together
  useEffect(() => {
    console.log(`Festival: ${festival}, Countdown: ${countdown}`);
  }, [festival, countdown]);

  // ---------------------- UI ----------------------
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* Title showing which festival is selected */}
      <h1>{festival} Festival App 🎉</h1>

      {/* Countdown display */}
      <h2>⏳ Countdown: {countdown}</h2>

      {/* Buttons to change the festival */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFestival("Diwali")}>Diwali</button>
        <button onClick={() => setFestival("Holi")}>Holi</button>
        <button onClick={() => setFestival("Pongal")}>Pongal</button>
      </div>
    </div>
  );
};

export default FestivalApp;
