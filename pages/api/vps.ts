import { API_URL } from "../../constants";
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
  price?: string | string[],
  period?: string | string[]
): Promise<VPSRes> {
  let url = `${API_URL}/vps?limit=8&offset=${offset}`;
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
  const res = await fetch(url);
  return await res.json();
}

export async function getVPSLink(id: string): Promise<VPSLink> {
  const res = await fetch(`${API_URL}/vps/${id}/link`);
  return await res.json();
}
