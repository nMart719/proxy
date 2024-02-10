"use client";
import { SnackbarProvider } from "notistack";
import React from "react";

export const NotistackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};
