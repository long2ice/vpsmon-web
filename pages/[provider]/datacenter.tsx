import { GetServerSideProps } from "next";
import { FiCopy } from "react-icons/fi";
import Layout from "../../components/layout";
import {
  Datacenter,
  Provider,
  ProviderDetail,
  ProviderType,
} from "../../types/response";
import { getDatacenters } from "../api/datacenter";
import { getProvider, getProviders } from "../api/provider";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useState } from "react";
import _ from "lodash";

export default function DataCenterPage({
  provider,
  providers,
  datacenters,
}: {
  provider: ProviderDetail;
  providers: Provider[];
  datacenters: Datacenter[];
}) {
  const [location, setLocation] = useState("");
  const uniqueLocations = _.uniq(
    datacenters.map((datacenter) => datacenter.location)
  );
  return (
    <Layout providers={providers} provider={provider}>
      <div className="mb-4 flex gap-2">
        {uniqueLocations.map((l) => (
          <div
            key={l}
            className={
              "badge badge-lg hover:cursor-pointer " +
              (l === location ? "" : "badge-outline")
            }
            onClick={() => setLocation(l)}
          >
            {l}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {_.filter(datacenters, (d) => {
          return location === "" || d.location === location;
        }).map((datacenter) => (
          <div className="card bg-base-100 shadow-xl" key={datacenter.id}>
            <div className="card-body">
              <h2 className="card-title">{datacenter.name}</h2>
              <p>
                <span className="font-bold">Location:</span>{" "}
                {datacenter.location}
              </p>
              {datacenter.ipv4 && (
                <p className="flex items-center gap-2">
                  <span className="font-bold">IPv4:</span>{" "}
                  <span>{datacenter.ipv4}</span>
                  <CopyToClipboard
                    text={datacenter.ipv4}
                    onCopy={() => {
                      toast.success("Copied ipv4 to clipboard successfully");
                    }}
                  >
                    <FiCopy className="hover:cursor-pointer" />
                  </CopyToClipboard>
                  <a
                    className="btn-sm btn ml-auto"
                    target="_blank"
                    href={`https://ping.pe/${datacenter.ipv4}`}
                    rel="noreferrer"
                  >
                    Ping
                  </a>
                </p>
              )}
              {datacenter.ipv6 && (
                <p className="flex items-center gap-2">
                  <span className="font-bold">IPv6:</span>{" "}
                  <span>{datacenter.ipv6}</span>
                  <CopyToClipboard
                    text={datacenter.ipv6}
                    onCopy={() => {
                      toast.success("Copied ipv6 to clipboard successfully");
                    }}
                  >
                    <FiCopy className="hover:cursor-pointer" />
                  </CopyToClipboard>
                  <a
                    className="btn-sm btn ml-auto"
                    target="_blank"
                    href={`https://ping6.ping.pe/${datacenter.ipv6}`}
                    rel="noreferrer"
                  >
                    Ping
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const type = query.provider as ProviderType;
  const provider = await getProvider(type);
  const providers = await getProviders();
  const datacenters = await getDatacenters(type);
  return {
    props: {
      provider,
      providers,
      datacenters,
    },
  };
};
