import { FiCpu } from "react-icons/fi";
import { Provider, VPS } from "../types/response";
import { FaMemory } from "react-icons/fa";
import { ImFloppyDisk } from "react-icons/im";
import { FaDollarSign, FaNetworkWired } from "react-icons/fa";
import _ from "lodash";
import { IoSpeedometerOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function VPSCard({
  v,
  providers,
}: {
  v: VPS;
  providers: Provider[];
}) {
  const router = useRouter();
  const query = router.query;
  const provider = query.provider as string;

  const itemClass = "flex items-center gap-2";
  return (
    <div className="card bg-base-100 shadow-xl" key={v.name}>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{v.name}</h2>
        {provider === undefined && (
          <h3 className="font-bold text-gray-500">
            {
              _.find(providers, (p: Provider) => {
                return p.type === v.provider;
              })?.name
            }
          </h3>
        )}
        <div className="mb-2 flex flex-col items-start gap-2 text-gray-500">
          <p className={itemClass}>
            <FiCpu />
            <span>
              <span className="font-bold">{v.cpu}</span> vCPU Core
            </span>
          </p>
          <p className={itemClass}>
            <FaMemory />
            <span>
              <span className="font-bold">{v.memory}</span> MB RAM
            </span>
          </p>
          <p className={itemClass}>
            <ImFloppyDisk />
            <span>
              <span className="font-bold">{v.disk}</span> GB {v.disk_type}
            </span>
          </p>
          <p className={itemClass}>
            <FaNetworkWired />
            <span>
              <span className="font-bold">
                {v.bandwidth === -1 ? "Unlimited" : v.bandwidth}
              </span>{" "}
              MB Bandwidth
            </span>
          </p>
          <p className={itemClass}>
            <IoSpeedometerOutline />
            <span>
              <span className="font-bold">{v.speed}</span> Mbps Speed
            </span>
          </p>
          <p className={itemClass}>
            <FaDollarSign />
            <span>
              <span className="font-bold">{v.price}</span> {v.currency} /{" "}
              <span className="capitalize">{v.period}</span>
            </span>
          </p>
        </div>
        <a
          className="btn-primary btn-wide btn-sm btn"
          href={`/vps/link?id=${v.id}`}
          target="_blank"
          rel="noreferrer"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
