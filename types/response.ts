interface Payments {
  icon: string;
  name: string;
}
interface Provider {
  type: string;
  name: string;
  homepage: string;
  icon: string;
  payments: Array<Payments>;
  datacenter_url: string;
}
export type { Provider, Payments };
