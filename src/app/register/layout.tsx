'use client'
import ManualModal from "../modals/Manual"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ManualModal />
      {children}
    </>

  )
}
