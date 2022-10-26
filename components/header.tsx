import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { TbHeartHandshake } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProviderDetail, ProviderType } from "../types/response";
import { FaTelegramPlane } from "react-icons/fa";

export default function Header({ provider }: { provider?: ProviderDetail }) {
  useEffect(() => {
    themeChange(false);
  }, []);
  const router = useRouter();
  const type = router.query.provider as ProviderType;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ml-2 gap-10">
        {provider ? (
          <a
            className="link"
            href={provider.homepage}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-2xl font-extrabold">{provider.name}</h2>
          </a>
        ) : (
          <h2 className="text-2xl font-extrabold">All Providers</h2>
        )}

        {provider && (
          <>
            <Link href={`/${type}/datacenter`}>
              <button className="btn-ghost btn text-lg font-semibold">
                DataCenter
              </button>
            </Link>
            <label
              className="btn-ghost btn text-lg font-semibold"
              htmlFor="modal-payment"
            >
              Payment
            </label>
          </>
        )}
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="tg://resolve?domain=vpsmonchannel">
              <FaTelegramPlane size="1.5em" />
            </a>
          </li>
          <li>
            <a className="btn-ghost btn" href="tg://resolve?domain=jenlors">
              <TbHeartHandshake size="1.5em" />
            </a>
          </li>
          <li>
            <button className="btn-ghost btn">
              <label className="swap swap-rotate">
                <input type="checkbox" data-toggle-theme="light,dark" />
                <IoSunnyOutline size="1.5em" className="swap-off" />
                <IoMoonOutline size="1.5em" className="swap-on" />
              </label>
            </button>
          </li>
        </ul>
      </div>
      <input type="checkbox" id="modal-payment" className="modal-toggle" />
      <label htmlFor="modal-payment" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">
            Supported Payment Methods for {provider?.name}
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {provider?.payments.map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <img src={p.icon} className="h-10 w-20" alt="payment-icon" />
                <span className="font-bold">{p.name}</span>
              </div>
            ))}
          </div>
        </label>
      </label>
    </div>
  );
}
