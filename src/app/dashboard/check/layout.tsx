'use client'

import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>

  )
}
