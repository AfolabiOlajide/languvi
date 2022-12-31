import { Routes, Route } from "react-router-dom";
// 
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Order from "./pages/Order";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/client/*" element={<Client />} />
        <Route path="/order/*" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
