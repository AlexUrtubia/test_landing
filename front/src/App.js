import React from "react";

import "assets/css/nucleo-icons.css";
import "assets/css/blk-design-system-pro-react.css";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Presentation from "views/Presentation.js";
import LandingPage from "views/examples/LandingPage.js";
import Index from "views/Index.js";
import ProyectosGla from "views/examples/ProyectosGla";

/* const sendLoginRequest = async () => {
    return await fetch("https://landing-auris.azurewebsites.net/api/mail-contact", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name: "alex" }),
    })
        .then((response) => {

            if (response === undefined) {
                alert("couldn connect to back");
            } else {
                if (response.ok) {
                    return response.json();
                } else {
                  
                    return response.json().then((data) => {
                        let errorMessage = "Error de autentificación";
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }
                        throw new Error(errorMessage);
                    });
                }
            }
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            alert(err.message);
        });
}; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Index />} />
        {/* <Route path="/home" element={<Presentation />} /> */}
         {/* <Route path="/sections" element={<Sections />} />
        <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/proyectos">
          <Route path="glaciares" element={<ProyectosGla />} />
        </Route>
        {/*<Route path="/blog-posts" element={<BlogPosts />} />
        <Route path="/contact-us" element={<ContactUs />} /> */}
        <Route path="/landing-page" element={<LandingPage />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/404-error" element={<Error404 />} />
        <Route path="/500-error" element={<Error500 />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/reset-page" element={<ResetPage />} />
        <Route path="/invoice-page" element={<InvoicePage />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
        <Route path="/chat-page" element={<ChatPage />} /> */}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
