"use client";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " | " +
          now.toLocaleTimeString("en-US", { hour12: true })
      );
    };
    updateDateTime();
    const interValid = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValid);
  }, []);

  return (
    <header className="text-white/70 body-font shadow-lg bg-black/85 ring-offset-emerald-800">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-white/70">
          {/* Styled Date and Time */}
          <span className="text-lg font-semibold text-emerald-300 animate-pulse">{currentDateTime}</span>
          <nav className="md:ml-auto flex flex-wrap items-center text-white/75 justify-end">
            {/* These links will now be simple text and won't navigate anywhere */}
            <span className="mr-5 cursor-pointer hover:text-emerald-400 transition-colors duration-300 transform hover:scale-105">
              Home
            </span>
            <span className="mr-5 cursor-pointer hover:text-emerald-400 transition-colors duration-300 transform hover:scale-105">
              About
            </span>
            <span className="mr-5 cursor-pointer hover:text-emerald-400 transition-colors duration-300 transform hover:scale-105">
              Blog
            </span>
            <span className="mr-5 cursor-pointer hover:text-emerald-400 transition-colors duration-300 transform hover:scale-105">
              Contact
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
