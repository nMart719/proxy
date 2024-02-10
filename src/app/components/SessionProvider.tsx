"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const SessionProviderComponent: React.FC<{
  children: ReactNode;
  session: any;
}> = ({ children, session }) => {
  return (
    <SessionProvider
      session={session}
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  );
};

export default SessionProviderComponent;
