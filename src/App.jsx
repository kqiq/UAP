import { useState, useEffect, lazy, Suspense } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./routes";
//

function InitLoading() {
  return "loading";
}

const App = () => {
  return (
    <Suspense fallback={<InitLoading />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default App;
