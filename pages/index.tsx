import Layout from "../components/layout";

export default function Home({ providers }: { providers: any }) {
  return (
    <Layout providers={providers}>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      <h2 className="mb-4 text-4xl font-bold">RackNerd</h2>
      <div className="flex items-center gap-2">
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="CPU"
              className="input-bordered input"
            />
            <span>Cores</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="RAM"
              className="input-bordered input"
            />
            <span>MB</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="DISK"
              className="input-bordered input"
            />
            <span>GB</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="BANDWIDTH"
              className="input-bordered input"
            />
            <span>Mbps</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="PRICE"
              className="input-bordered input"
            />
            <span>USD</span>
          </label>
        </div>
        <button className="btn">Submit</button>
      </div>
      <div className="divider"></div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/provider");
  const providers = await res.json();

  return {
    props: {
      providers,
    },
  };
}
