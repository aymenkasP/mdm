import axios from "axios";
import cheerio from "cheerio";
import puppeteer from "puppeteer-core";

export async function POST(request: Request) {
  const getUrl = await request.json();
  const url = `http://webcache.googleusercontent.com/search?q=cache:${getUrl}`;

  const res = await axios(url);

 

  return Response.json({ data: res.data });
}
