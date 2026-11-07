
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: "Black College Backpack",
      location: "College Library",
      date: "5 November 2026",
      description:
        "Black backpack with a laptop compartment and two side pockets.",
      email: "student@example.com",
      image: "",
    },
    {
      id: 2,
      name: "Samsung Smartphone",
      location: "College Canteen",
      date: "4 November 2026",
      description: "Samsung phone with a blue protective case.",
      email: "student@example.com",
      image: "",
    },
    {
      id: 3,
      name: "College ID Card",
      location: "Main Block",
      date: "3 November 2026",
      description:
        "Student identity card reported missing near the entrance.",
      email: "student@example.com",
      image: "",
    },
  ]);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    const savedComplaints = localStorage.getItem("complaints");

    if (savedUser) {
      try {
        setLoggedInUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Could not load user:", error);
      }
    }

    if (savedComplaints) {
      try {
        setComplaints(JSON.parse(savedComplaints));
      } catch (error) {
        console.error("Could not load complaints:", error);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        complaints,
        setComplaints,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
