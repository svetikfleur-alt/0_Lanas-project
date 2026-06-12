"use client";

import { useEffect } from "react";

const storageKey = "vil_flow_state";

export function StorageScript() {
  useEffect(() => {
    if (!window.localStorage.getItem(storageKey)) {
      window.localStorage.setItem(storageKey, JSON.stringify({}));
    }
  }, []);

  return null;
}
