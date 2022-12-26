import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import SignIn from "./components/AuthForm/SignIn";
import Register from "./components/AuthForm/Register";
import CreateClient from "./components/AuthForm/CreateClient";
import CreateTranslator from "./components/AuthForm/CreateTranslator";
// client dashboard
import ContactUs from "./components/ClientDashboard/ContactUsContainer/ContactUs";
import Offers from "./components/ClientDashboard/OffersContainer/Offers";
import Orders from "./components/ClientDashboard/OrdersContainer/Orders";
import Revisions from "./components/ClientDashboard/RevisionsContainer/Revisions";
import Settings  from "./components/ClientDashboard/SettingsContainer/Settings";
import Dashboard from "./components/ClientDashboard/DashboardContainer/Dashboard"


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
        <Route path="/client/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="offers" element={<Offers />} />
          <Route path="settings" element={<Settings />} />
          <Route path="orders" element={<Orders />} />
          <Route path="revisions" element={<Revisions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
