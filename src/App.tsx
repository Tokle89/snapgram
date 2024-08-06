import React from "react";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import SignInForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_auth/forms/SignupForm";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-Up" element={<SignUpForm />} />
        <Route path="index" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
