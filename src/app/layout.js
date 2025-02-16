"use client";

import { Provider } from "react-redux";
import "./globals.css";
import ReduxStore from "@/Store/ReduxStore";
import Navbar from "@/Components/Navbar/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider store={ReduxStore}>
        <Navbar/>
        {children}
      </Provider>
      </body>
    </html>
  );
}
