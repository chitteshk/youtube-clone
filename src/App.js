import React from "react";
import Body from "./components/Body";
import { BodyProvider } from "./context/BodyContext";
function App() {
  return (
    <div className="app w-screen min-h-screen overflow-x-hidden bg-gray-100">
      <BodyProvider>
        <Body />
      </BodyProvider>
    </div>
  );
}

export default App;
