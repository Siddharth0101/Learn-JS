"use client";

import { Provider, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./globals.css";
import ReduxStore from "@/Store/ReduxStore";
import Navbar from "@/Components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <Provider store={ReduxStore}>
      <RootLayoutContent>{children}</RootLayoutContent>
    </Provider>
  );
}

function RootLayoutContent({ children }) {
  const themeSelect = useSelector((state) => state.Theme.theme);

  return (
    <html lang="en">
      <body className={`${themeSelect === "LIGHT" ? "bg-gray-400" : "bg-gray-600"} min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
