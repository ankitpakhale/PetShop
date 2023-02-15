import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  Service,
  Testimonial,
  UserChangePass,
  UserIndex,
  UserLogin,
  UserProfile,
  UserSignup,
  VendorLogin,
  VendorProduct,
} from "./Components";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main className="py-3">
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/contact" exact element={<Contact />} />
          <Route path="/service" exact element={<Service />} />
          <Route path="/testimonial" exact element={<Testimonial />} />
          <Route path="/change/password" exact element={<UserChangePass />} />
          <Route path="/user/index" exact element={<UserIndex />} />
          <Route path="/user/login" exact element={<UserLogin />} />
          <Route path="/user/profile" exact element={<UserProfile />} />
          <Route path="/user/signup" exact element={<UserSignup />} />
          <Route path="/vendor/login" exact element={<VendorLogin />} />
          <Route path="/vendor/product" exact element={<VendorProduct />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
