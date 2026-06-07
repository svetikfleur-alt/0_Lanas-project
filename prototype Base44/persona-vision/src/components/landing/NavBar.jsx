import React from "react";
import { Link } from "react-router-dom";

/**
 * A simple navigation bar for the landing page.  The original
 * implementation in Base44 includes dynamic scroll behaviour and
 * language selection; this version provides a static bar with a few
 * example links.  Adjust the links and styling as needed for your
 * application.
 */
export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Site logo / name */}
          <span className="text-xl font-bold text-primary">PersonaVision</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm hover:underline">
            Features
          </a>
          <a href="#pricing" className="text-sm hover:underline">
            Pricing
          </a>
          <a href="#faq" className="text-sm hover:underline">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="text-sm px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}