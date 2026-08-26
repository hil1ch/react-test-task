import { ScrollRestoration } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col mt-24 mb-7">
      <main className="flex-1">{children}</main>
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
