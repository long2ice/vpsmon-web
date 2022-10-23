import Footer from "./footer";
import Sidebar from "./sidebar";
import React from "react";
import { Provider, ProviderDetail } from "../types/response";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({
  children,
  providers,
  provider,
}: {
  children: React.ReactNode;
  providers: Provider[];
  provider?: ProviderDetail;
}) {
  const router = useRouter();
  const query = router.query;
  const category = query.category;
  return (
    <div className="flex">
      <Sidebar
        className="min-h-screen w-[15%]"
        providers={providers}
        provider={provider}
      />
      <div className="flex w-full flex-col">
        <main className="h-full bg-slate-100 p-4">
          {provider && (
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link href="/">
                    <a>All</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/${provider?.type}`}>
                    <a>{provider?.name}</a>
                  </Link>
                </li>
                {category && (
                  <li>
                    <Link href={`/${provider?.type}/${category}`}>
                      <a>{category}</a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
