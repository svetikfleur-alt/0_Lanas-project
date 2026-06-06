import React from "react";

/**
 * A basic footer component inspired by the original Base44 landing
 * page.  It displays the site name and a few legal links.  You
 * should customise the text and links to suit your own site.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">PersonaVision</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="mailto:contact@example.com" className="hover:underline">
            Contact
          </a>
        </div>
        <p className="text-xs md:text-sm">© 2026 PersonaVision. All rights reserved.</p>
      </div>
    </footer>
  );
}