import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import Link from "next/link";
import { Provider, ProviderDetail } from "../types/response";
import { useRouter } from "next/router";

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
    <div className={"bg-slate-800 text-base-300 " + className}>
      <Link href="/" key="title">
        <h1 className="py-4 text-center text-2xl font-bold hover:cursor-pointer">
          VPSMON
        </h1>
      </Link>
      <ul className="px-8">
        <Link href="/">
          <a>
            <li className="flex items-center pt-5 hover:cursor-pointer hover:text-white">
              <FcHome size="1.5em" className="mr-2" />
              <span
                className={
                  provider === undefined ? "text-white" : "text-gray-400"
                }
              >
                All Providers
              </span>
            </li>
          </a>
        </Link>
        {providers.map((p: Provider) => (
          <div key={p.type}>
            <Link href={`/${p.type}`}>
              <a>
                <li
                  key={p.type}
                  className={
                    "flex items-center pt-5 hover:cursor-pointer hover:text-white " +
                    (provider?.type === p.type ? "text-white" : "text-gray-400")
                  }
                >
                  <div className="avatar">
                    <div className="w-6 rounded">
                      <img src={p.icon} />
                    </div>
                  </div>
                  <span className="ml-2">{p.name}</span>
                  {provider?.type === p.type ? (
                    <FiChevronUp className="ml-auto" />
                  ) : (
                    <FiChevronDown className="ml-auto" />
                  )}
                </li>
              </a>
            </Link>
            {provider?.type === p.type && (
              <ul className="pl-8">
                {provider?.categories.map((c) => (
                  <Link href={`/${p.type}/${c}`} key={c}>
                    <a>
                      <li
                        key={c}
                        className={
                          "pt-2 text-sm hover:cursor-pointer hover:text-indigo-500 " +
                          (category === c
                            ? "text-indigo-500"
                            : "text-slate-400")
                        }
                      >
                        {c}
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
