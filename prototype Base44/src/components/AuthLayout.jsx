import React from "react";

/**
 * Generic authentication page layout used across the login,
 * registration, and password reset pages.  It centers content on the
 * page and displays an optional icon, title, subtitle and footer.
 */
export default function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        {Icon && (
          <div className="flex justify-center">
            <Icon className="w-10 h-10 text-primary" />
          </div>
        )}
        {title && (
          <h1 className="text-2xl font-semibold text-center">{title}</h1>
        )}
        {subtitle && (
          <p className="text-center text-sm text-muted-foreground">{subtitle}</p>
        )}
        <div>{children}</div>
        {footer && <div className="text-center text-sm mt-6">{footer}</div>}
      </div>
    </div>
  );
}