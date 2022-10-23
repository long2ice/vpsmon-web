import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import VPSList from "../../components/vpsList";
import {
  Datacenter,
  VPSRes,
  ProviderType,
  Provider,
} from "../../types/response";
import { getProvider, getProviders } from "../api/provider";
import { getVPS } from "../api/vps";

export default function CategoryPage({
  provider,
  providers,
  vps,
  category,
}: {
  provider: any;
  providers: Provider[];
  datacenters: Datacenter[];
  vps: VPSRes;
  category: string;
}) {
  return (
    <Layout providers={providers} provider={provider}>
      <h2 className="mb-4 text-4xl font-bold">{provider.name}</h2>
      <h3 className="mb-4 text-xl font-bold text-gray-500">{category}</h3>
      <VPSList providers={providers} vps={vps} />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const type = query.provider as ProviderType;
  const category = query.category as string;
  const cpu = query.cpu ?? undefined;
  const memory = query.memory ?? undefined;
  const disk = query.disk ?? undefined;
  const bandwidth = query.bandwidth ?? undefined;
  const price = query.price ?? undefined;
  const speed = query.speed ?? undefined;
  const period = query.period ?? undefined;
  const provider = await getProvider(type);
  const providers = await getProviders();
  const offset = Number(query.offset ?? "0");

  const vps = await getVPS(
    offset,
    type,
    category,
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
      vps,
      category,
    },
  };
};
