import { BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import RouteRender from "./components/RouteRender";

function App() {
  return (
    <Router>
        <DefaultLayout>
          <RouteRender />
        </DefaultLayout>
    </Router>
  );
}

export default App;
