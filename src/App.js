import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home.component.tsx";
import Navigation from "./routes/navigation/Navigation.component.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
