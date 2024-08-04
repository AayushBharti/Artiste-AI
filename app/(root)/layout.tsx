import React from "react"
import Sidebar from "@/components/Shared/Sidebar"
import MobileNav from "../../components/Shared/MobileNav"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  )
}

export default Layout
