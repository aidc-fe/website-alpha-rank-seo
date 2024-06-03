"use client";
import Script from "next/script";

const API_KEY = "AIzaSyBhJiD-oMsImAANEgcyX74dju4ZJPVlyws";

export default function GoogleApi() {
  return (
    <Script
      defer
      onLoad={() => {
        gapi.load("client", () => {
          gapi.client
            .init({
              apiKey: API_KEY,
              discoveryDocs: [
                "https://www.googleapis.com/discovery/v1/apis/pagespeedonline/v5/rest",
                "https://www.googleapis.com/discovery/v1/apis/searchconsole/v1/rest",
              ],
            })
            .then(() => {});
        });
      }}
      src="https://apis.google.com/js/api.js"
    ></Script>
  );
}
