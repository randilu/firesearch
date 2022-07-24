import type { FC, ReactNode } from "react";

import "./styles.scss";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="main-container">
    {/* <header>
      <div>Firesearch</div>
    </header> */}
    <div className="brand">
      <h2>Welcome to Firesearch 🔥</h2>
    </div>
    {children}
  </div>
);
