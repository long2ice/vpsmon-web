import Footer from "./footer";
import Sidebar from "./sidebar";
import React from "react";
import { Provider } from "../types/response";

export default function Layout({
  children,
  providers,
}: {
  children: React.ReactNode;
  providers: Array<Provider>;
}) {
  return (
    <div className="flex">
      <Sidebar className="h-screen w-[15%]" providers={providers} />
      <div className="flex w-full flex-col">
        <main className="h-full bg-slate-100 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
