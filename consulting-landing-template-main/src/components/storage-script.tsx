"use client";

import { useEffect } from "react";

export function StorageScript() {
  useEffect(() => {
    const keys = ["vil_answers", "vil_analysis", "vil_images", "vil_delivery"];
    for (const key of keys) {
      if (!window.localStorage.getItem(key)) {
        window.localStorage.setItem(key, "");
      }
    }
  }, []);

  return null;
}
