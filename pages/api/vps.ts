import { ProviderType, VPSLink, VPSRes } from "../../types/response";

export async function getVPS(
  offset: number,
  provider?: ProviderType,
  category?: string,
  cpu?: string | string[],
  memory?: string | string[],
  disk?: string | string[],
  bandwidth?: string | string[],
  speed?: string | string[],
  ipv4?: string | string[],
  ipv6?: string | string[],
  price?: string | string[],
  period?: string | string[]
): Promise<VPSRes> {
  let url = `${process.env.API_URL}/vps?limit=8&offset=${offset}`;
  if (provider) {
    url += `&provider=${provider}`;
  }
  if (category) {
    url += `&category=${category}`;
  }
  if (cpu) {
    url += `&cpu=${cpu}`;
  }
  if (memory) {
    url += `&memory=${memory}`;
  }
  if (disk) {
    url += `&disk=${disk}`;
  }
  if (bandwidth) {
    url += `&bandwidth=${bandwidth}`;
  }
  if (speed) {
    url += `&speed=${speed}`;
  }
  if (price) {
    url += `&price=${price}`;
  }
  if (period) {
    url += `&period=${period}`;
  }
  if (ipv4) {
    url += `&ipv4=${ipv4}`;
  }
  if (ipv6) {
    url += `&ipv6=${ipv6}`;
  }
  const res = await fetch(url);
  return await res.json();
}

export async function getVPSLink(id: string): Promise<VPSLink> {
  const res = await fetch(`${process.env.API_URL}/vps/${id}/link`);
  return await res.json();
}
