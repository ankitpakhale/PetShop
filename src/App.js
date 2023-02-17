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
  About,
  Product,
} from "./Components";
import "./Assets/Styles/lib/flaticon/font/flaticon.css";

import "./Assets/Styles/css/bootstrap.min.css";
import "./Assets/Styles/css/style.css";
import "./Assets/Styles/css/carousel.css";

import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

// import "./Assets/Styles/lib/owlcarousel/assets/owl.carousel.min.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="py-3">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/product" exact element={<Product />} />
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
