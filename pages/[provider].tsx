import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import VPSList from "../components/vpsList";
import { Datacenter, Provider, ProviderType, VPSRes } from "../types/response";
import { getDatacenters } from "./api/datacenter";
import { getProvider, getProviders } from "./api/provider";
import { getVPS } from "./api/vps";

export default function ProviderPage({
  provider,
  providers,
  datacenters,
  vps,
}: {
  provider: any;
  providers: Provider[];
  datacenters: Datacenter[];
  vps: VPSRes;
}) {
  return (
    <Layout providers={providers} provider={provider}>
      <h2 className="mb-4 text-4xl font-bold">{provider.name}</h2>
      <div className="tabs mb-4 text-xl font-bold text-gray-500">
        <a className="tab tab-bordered tab-active">VPS</a>
        <a className="tab tab-bordered">DataCenter</a>
        <a className="tab tab-bordered">Payment</a>
      </div>
      <VPSList providers={providers} vps={vps} />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const type = query.provider as ProviderType;
  const provider = await getProvider(type);
  const datacenters = await getDatacenters(type);
  const cpu = query.cpu ?? undefined;
  const memory = query.memory ?? undefined;
  const disk = query.disk ?? undefined;
  const bandwidth = query.bandwidth ?? undefined;
  const price = query.price ?? undefined;
  const speed = query.speed ?? undefined;
  const period = query.period ?? undefined;
  const offset = Number(query.offset ?? "0");
  const providers = await getProviders();
  const vps = await getVPS(
    offset,
    type,
    undefined,
    cpu,
    memory,
    disk,
    bandwidth,
    speed,
    price,
    period
  );

  return {
    props: {
      provider,
      providers,
      datacenters,
      vps,
    },
  };
};
