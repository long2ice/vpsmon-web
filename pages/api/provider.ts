import { Provider, ProviderDetail, ProviderType } from "../../types/response";

export async function getProviders(): Promise<Provider[]> {
  const res = await fetch(`${process.env.API_URL}/provider`);
  return await res.json();
}
export async function getProvider(type: ProviderType): Promise<ProviderDetail> {
  const res = await fetch(`${process.env.API_URL}/provider/${type}`);
  return await res.json();
}
