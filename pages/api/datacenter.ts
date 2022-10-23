import { API_URL } from "../../constants";
import { Datacenter, ProviderType } from "../../types/response";

export async function getDatacenters(
  type: ProviderType
): Promise<Datacenter[]> {
  const res = await fetch(`${API_URL}/datacenter?provider=${type}`);
  return await res.json();
}
