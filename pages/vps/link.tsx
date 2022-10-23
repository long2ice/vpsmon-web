import { GetServerSideProps } from "next";
import { getVPSLink } from "../api/vps";

export default function BuyPage() {}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id as string;
  const { link } = await getVPSLink(id);

  return {
    redirect: {
      destination: link,
      permanent: false,
    },
  };
};
