import { Navigation } from "components/Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};