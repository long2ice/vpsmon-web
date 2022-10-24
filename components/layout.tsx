import Footer from "./footer";
import Sidebar from "./sidebar";
import React from "react";
import { Provider, ProviderDetail } from "../types/response";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "./header";

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
        <Header provider={provider} />
        <main className="h-full bg-base-200 px-4 pb-4">
          {provider && (
            <div className="text breadcrumbs mt-2 font-bold">
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
                {router.pathname == "/[provider]/datacenter" && (
                  <li>
                    <Link href={`/${provider?.type}/datacenter`}>
                      <a>DataCenter</a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
          <div className="divider"></div>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
