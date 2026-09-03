import {
  useEffect,
  useState,
} from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function Layout() {
  const [showAnnouncement, setShowAnnouncement] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navbar />

      {showAnnouncement && (
        <div className="announcement">
          Welcome to Mini Store! 🛍️
        </div>
      )}

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