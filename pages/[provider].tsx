import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import VPSList from "../components/vpsList";
import { Provider, ProviderType, VPSRes } from "../types/response";
import { getProvider, getProviders } from "./api/provider";
import { getVPS } from "./api/vps";

export default function ProviderPage({
  provider,
  providers,
  vps,
}: {
  provider: any;
  providers: Provider[];
  vps: VPSRes;
}) {
  return (
    <Layout providers={providers} provider={provider}>
      <VPSList providers={providers} vps={vps} />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const type = query.provider as ProviderType;
  const provider = await getProvider(type);
  const cpu = query.cpu ?? undefined;
  const memory = query.memory ?? undefined;
  const disk = query.disk ?? undefined;
  const bandwidth = query.bandwidth ?? undefined;
  const price = query.price ?? undefined;
  const speed = query.speed ?? undefined;
  const ipv4 = query.ipv4 ?? undefined;
  const ipv6 = query.ipv6 ?? undefined;
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
    ipv4,
    ipv6,
    price,
    period
  );

  return {
    props: {
      provider,
      providers,
      vps,
    },
  };
};
