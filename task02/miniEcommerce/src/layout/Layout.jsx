import {
  useEffect,
  useState,
} from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function Layout() {


  return (
    <>
      <Navbar />

     

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>
          © 2026 MiniStore. All rights reserved.
        </p>
      </footer>
    </>
  );
}