"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UrlInput() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | false>(false);

  const router = useRouter();

  function isURL(str: string): boolean {
    try {
      new URL(str);
      return true;
    } catch (error) {
      return false;
    }
  }

  const onRead = () => {
    if (!isURL(url)) {
      return setError("The input should be a valid URL.");
    }

    if (url.length > 0) {
      setError(false);
      router.push(`/article/?q=${url} `);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4  ">
        {error ? (
          <div
            className={
              "text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-400 "
            }
          >
            <span className="text-xl inline-block mr-5 align-middle">
              <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">{error}</span>
          </div>
        ) : null}
        <div>
          <p className="capitalize font-bold mb-1 ">past your url</p>

          <input
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="past your url"
            value={url}
            onChange={({ target }) => setUrl(target.value)}
            required
          />
        </div>
        <button
          onClick={() => onRead()}
          className="bg-black rounded-md py-3 px-6 text-white text-center "
        >
          Read
        </button>
      </div>
    </div>
  );
}
