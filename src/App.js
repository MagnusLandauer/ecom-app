import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home.component.tsx";
import Navigation from "./routes/navigation/Navigation.component.tsx";
import Authentication from "./routes/authentication/Authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
