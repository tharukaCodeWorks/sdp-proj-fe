import { RouterProvider } from "react-router-dom";
import { routers } from "./configs/routes";

function App() {
  const hostname = window.location.hostname;
  const isDashboard = hostname === "dashboard.localhost";

  return <RouterProvider router={routers} />;
}

export default App;
