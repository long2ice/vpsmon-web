import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Provider, VPSRes } from "../types/response";
import VPSCard from "./vpsCard";

export default function VPSList({
  providers,
  vps,
}: {
  providers: Provider[];
  vps: VPSRes;
}) {
  const perPage = 8;
  const data = vps.data;
  const total = vps.total;
  const pageCount = Math.ceil(total / perPage);
  const router = useRouter();
  const query = router.query;
  const [cpu, setCPU] = useState((query.cpu ?? "") as string);
  const [memory, setMemory] = useState((query.memory ?? "") as string);
  const [disk, setDisk] = useState((query.disk ?? "") as string);
  const [bandwidth, setBandwidth] = useState((query.bandwidth ?? "") as string);
  const [speed, setSpeed] = useState((query.speed ?? "") as string);
  const [price, setPrice] = useState((query.price ?? "") as string);
  const [period, setPeriod] = useState((query.period ?? "") as string);
  const [ipv4, setIPv4] = useState((query.ipv4 ?? "") as string);
  const [ipv6, setIPv6] = useState((query.ipv6 ?? "") as string);

  const handlePageClick = async (event: { selected: number }) => {
    const newOffset = (event.selected * perPage) % total;
    query.offset = `${newOffset}`;
    await router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(e.target.value);
  };
  useEffect(() => {
    (async () => {
      if (cpu) {
        query.cpu = cpu;
      }
      if (memory) {
        query.memory = memory;
      }
      if (disk) {
        query.disk = disk;
      }
      if (bandwidth) {
        query.bandwidth = bandwidth;
      }
      if (speed) {
        query.speed = speed;
      }
      if (price) {
        query.price = price;
      }
      if (period) {
        query.period = period;
      }
      if (ipv4) {
        query.ipv4 = ipv4;
      }
      if (ipv6) {
        query.ipv6 = ipv6;
      }
      await router.push({
        pathname: router.pathname,
        query: query,
      });
    })();
  }, [bandwidth, cpu, disk, memory, period, price, speed, ipv4, ipv6]);
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Minimum CPU"
              value={cpu}
              onChange={(e) => {
                setCPU(e.target.value);
              }}
              className="input-bordered input"
            />
            <span>Cores</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Minimum RAM"
              className="input-bordered input"
              value={memory}
              onChange={(e) => {
                setMemory(e.target.value);
              }}
            />
            <span>MB</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Minimum Disk"
              className="input-bordered input"
              value={disk}
              onChange={(e) => {
                setDisk(e.target.value);
              }}
            />
            <span>GB</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Minimum Bandwidth"
              className="input-bordered input"
              value={bandwidth}
              onChange={(e) => {
                setBandwidth(e.target.value);
              }}
            />
            <span>GB</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Minimum Speed"
              className="input-bordered input"
              value={speed}
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
            />
            <span>Mbps</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Minimum"
              className="input-bordered input"
              value={ipv4}
              onChange={(e) => {
                setIPv4(e.target.value);
              }}
            />
            <span>IPv4</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Minimum"
              className="input-bordered input"
              value={ipv6}
              onChange={(e) => {
                setIPv6(e.target.value);
              }}
            />
            <span>IPv6</span>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              placeholder="Maximum Price"
              className="input-bordered input"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <span>USD</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text font-bold">Month</span>
            <input
              type="radio"
              name="period"
              className="radio"
              value="month"
              checked={period === "month"}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text font-bold">Year</span>
            <input
              type="radio"
              name="period"
              value="year"
              className="radio"
              checked={period === "year"}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text font-bold">Triennium</span>
            <input
              type="radio"
              name="period"
              value="triennium"
              className="radio"
              checked={period === "triennium"}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-control">
          <button
            className="btn-primary btn"
            onClick={() => {
              setCPU("");
              setMemory("");
              setDisk("");
              setBandwidth("");
              setSpeed("");
              setPrice("");
              setPeriod("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((v) => (
          <VPSCard v={v} key={v.name + v.category} providers={providers} />
        ))}
      </div>
      <div className="my-4 flex justify-center">
        <ReactPaginate
          className="menu menu-horizontal rounded-md bg-base-100 shadow-xl"
          pageCount={pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          activeLinkClassName="active"
          disabledLinkClassName="disabled"
          onPageChange={handlePageClick}
        />
      </div>
    </>
  );
}
