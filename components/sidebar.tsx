import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import Link from "next/link";
import { Provider, ProviderDetail } from "../types/response";
import { useRouter } from "next/router";
import Image from "next/image";

interface SidebarProps {
  className?: string;
  providers: Provider[];
  provider?: ProviderDetail;
}

export default function Sidebar({
  className,
  providers,
  provider,
}: SidebarProps) {
  const router = useRouter();
  const query = router.query;
  const category = query.category;
  return (
    <div className={"bg-neutral " + className}>
      <Link href="/" key="title">
        <h1 className="py-4 text-center text-3xl font-bold text-neutral-content hover:cursor-pointer">
          VPSMON
        </h1>
      </Link>
      <ul className="px-8">
        <li>
          <Link href="/">
            <div className="flex items-center pt-5 hover:cursor-pointer hover:text-neutral-content">
              <div className="avatar">
                <div className="w-6 rounded">
                  <Image
                    src="/favicon.ico"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <span
                className={
                  provider === undefined
                    ? "ml-2 text-neutral-content"
                    : "ml-2 text-gray-300"
                }
              >
                All Providers
              </span>
            </div>
          </Link>
        </li>
        {providers.map((p: Provider) => (
          <li key={p.type}>
            <Link href={`/${p.type}`}>
              <span
                className={
                  "flex items-center pt-5 hover:cursor-pointer hover:text-white " +
                  (provider?.type === p.type ? "text-white" : "text-gray-300")
                }
              >
                <div className="avatar">
                  <div className="w-6 rounded">
                    <Image
                      src={p.icon}
                      alt="provider"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <span className="ml-2">{p.name}</span>
                {provider?.type === p.type ? (
                  <FiChevronUp className="ml-auto" />
                ) : (
                  <FiChevronDown className="ml-auto" />
                )}
              </span>
            </Link>
            {provider?.type === p.type && (
              <ul className="pl-8">
                {provider?.categories.map((c) => (
                  <li
                    key={c}
                    className={
                      "pt-2 hover:cursor-pointer hover:text-indigo-500 " +
                      (category === c ? "text-indigo-500" : "text-slate-300")
                    }
                  >
                    <Link href={`/${p.type}/${c}`}>{c}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
