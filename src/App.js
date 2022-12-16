import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import SignIn from "./components/AuthForm/SignIn";
import Register from "./components/AuthForm/Register";
import CreateClient from "./components/AuthForm/CreateClient";
import CreateTranslator from "./components/AuthForm/CreateTranslator";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="create-client" element={<CreateClient />} />
          <Route path="create-translator" element={<CreateTranslator />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
