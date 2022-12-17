import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import SignIn from "./components/AuthForm/SignIn";
import Register from "./components/AuthForm/Register";
import CreateClient from "./components/AuthForm/CreateClient";
import CreateTranslator from "./components/AuthForm/CreateTranslator";
import Dashboard from "./components/Dashboard/DashboardContainer/Dashboard";
import Settings from "./components/Dashboard/SettingsContainer/Settings";
import Services from "./components/Dashboard/ServicesContainer/Services";
import Documents from "./components/Dashboard/DocumentsContainer/Documents";
import PersonalDetails from "./components/Dashboard/PersonalDetailsContainer/PersonalDetails";


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
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="documents" element={<Documents />} />
          <Route path="services" element={<Services />} />
          <Route path="settings" element={<Settings />} />
          <Route path="personal-details" element={<PersonalDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
