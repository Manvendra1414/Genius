"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4c26e10e-37f2-4067-af72-6516984588ca");
  }, []);

  return null;
};
