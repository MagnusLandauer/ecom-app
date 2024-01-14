import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home.component.tsx";
import Navigation from "./routes/navigation/Navigation.component.tsx";
import SignIn from "./routes/sign-in/SignIn.component.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
