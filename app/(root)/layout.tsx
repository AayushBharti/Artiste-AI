import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Sidebar/>
    // <MobileNav />
    <main className="root">
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  )
}

export default Layout
