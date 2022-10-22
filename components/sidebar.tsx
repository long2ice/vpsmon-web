import { FiChevronDown } from "react-icons/fi";
import { Provider } from "../types/response";
import { FcHome } from "react-icons/fc";

interface SidebarProps {
  className?: string;
  providers: Array<Provider>;
}

export default function Sidebar({ className, providers }: SidebarProps) {
  return (
    <div className={"bg-slate-800 text-base-300 " + className}>
      <h1 className="py-4 font-bold text-2xl text-center">VPSMON</h1>
      <ul className="px-8">
        <li className="flex items-center pt-5 hover:cursor-pointer hover:text-white">
          <FcHome size="1.5em" />
          <span className="ml-2">All Providers</span>
        </li>
        {providers.map((provider: Provider) => (
          <li
            key={provider.type}
            className="flex items-center pt-5 hover:cursor-pointer hover:text-white"
          >
            <div className="avatar">
              <div className="w-6 rounded">
                <img src={provider.icon} />
              </div>
            </div>
            <span className="ml-2">{provider.name}</span>
            <FiChevronDown className="ml-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
}
