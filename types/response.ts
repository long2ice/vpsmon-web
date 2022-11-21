export type ProviderType =
  | "racknerd"
  | "greencloud"
  | "licloud"
  | "pacificrack"
  | "cloudcone";

export interface Provider {
  type: ProviderType;
  name: string;
  icon: string;
}

export interface Datacenter {
  provider: string;
  location: string;
  ipv6: any;
  name: string;
  ipv4: string;
  id: number;
}

export interface Payments {
  icon: string;
  name: string;
}

export interface ProviderDetail {
  type: string;
  name: string;
  homepage: string;
  icon: string;
  payments: Array<Payments>;
  datacenter_url: string;
  categories: Array<string>;
}

export interface VPS {
  id: number;
  provider: string;
  category: string;
  name: string;
  memory: number;
  cpu: number;
  disk: number;
  disk_type: string;
  bandwidth: number;
  speed: number;
  price: number;
  ipv4: number;
  ipv6: number;
  currency: string;
  period: string;
  remarks: string;
  count: number;
}

export interface VPSRes {
  total: number;
  data: Array<VPS>;
}

export interface VPSLink {
  link: string;
}
