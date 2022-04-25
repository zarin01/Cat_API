import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cat() {
  const [url, setUrl] = useState("");
  function fetch_data() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(
        (res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Request Failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonRes) => {
        setUrl(jsonRes[0].url);
      });
  }
  return (
    <div className="cat_main">
      <img src={url} className="cat_img" />
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={fetch_data}
      >
        Block level button
      </button>
    </div>
  );
}
