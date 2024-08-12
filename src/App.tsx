import React from "react";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import SignInForm from "./_auth/forms/SignInForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-Up" element={<SignUpForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="index" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
