import { IContextType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";

export const INITIAL_USER = {
  id: "",
  email: "",
  name: "",
  username: "",
  imageUrl: "",
  bio: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAutUser: async () => Promise<boolean>,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = () => {
  return <div></div>;
};
