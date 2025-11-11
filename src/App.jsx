import React, { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Routes from "./Routes";

function App() {
  useEffect(() => {
    // Increment visit counter on app load
    fetch('/api/visits/increment', { method: 'POST' }).catch(() => {});
  }, []);
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
