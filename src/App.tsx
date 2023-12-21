import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { routers } from "./configs/routes";
import { store } from "./redux/store";
import { AppInitialization } from "./components";

function App() {
  const hostname = window.location.hostname;
  const isDashboard = hostname === "dashboard.localhost";

  return (
    <Provider store={store}>
      <AppInitialization>
        <RouterProvider router={routers} />
      </AppInitialization>
    </Provider>
  );
}

export default App;
