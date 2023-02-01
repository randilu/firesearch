import type { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col justify-center h-screen bg-gradient-to-r from-purple-200 to-cyan-700">
    {/* <header>
      <div>Firesearch</div>
    </header> */}
    {/* <div className="brand">
      <h2>Welcome to Firesearch 🔥</h2>
    </div> */}
    {children}
  </div>
);
