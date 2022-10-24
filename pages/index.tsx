import Layout from "../components/layout";
import { Provider, VPSRes } from "../types/response";
import { getProviders } from "./api/provider";
import { getVPS } from "./api/vps";
import VPSList from "../components/vpsList";
import { GetServerSideProps } from "next";

export default function Home({
  providers,
  vps,
}: {
  providers: Provider[];
  vps: VPSRes;
}) {
  return (
    <Layout providers={providers}>
      <div className="mt-4"></div>
      <VPSList providers={providers} vps={vps} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const cpu = query.cpu ?? undefined;
  const memory = query.memory ?? undefined;
  const disk = query.disk ?? undefined;
  const bandwidth = query.bandwidth ?? undefined;
  const price = query.price ?? undefined;
  const speed = query.speed ?? undefined;
  const period = query.period ?? undefined;
  const ipv4 = query.ipv4 ?? undefined;
  const ipv6 = query.ipv6 ?? undefined;
  const offset = Number(query.offset ?? "0");
  const providers = await getProviders();
  const vps = await getVPS(
    offset,
    undefined,
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
      providers,
      vps,
    },
  };
};
