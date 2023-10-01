import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import ArticleNave from "@/components/ArticleNave";

export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("🚀 ~ file: page.tsx:10 ~ searchParams:", searchParams);

  const url = `http://webcache.googleusercontent.com/search?q=cache:${searchParams.q}`;

  const res = await fetch(url);
  const data = await res.text();

  return (
    <>
      <div className="content">
        {parse(data)}
      </div>
      ;
    </>
  );
}
