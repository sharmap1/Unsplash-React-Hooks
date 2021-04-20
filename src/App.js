import React, { useState, useEffect } from "react";
import { Heading } from "./components/Heading";
import { UnsplashImage } from "./components/UnsplashImage";
import { Loader } from "./components/Loader";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const fetchImages = (count = 14) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImage([...images, ...res.data]);
        console.log(res.data);
      });
  };

  return (
    <>
      <Heading />

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <UnsplashImage images={images} />
      </InfiniteScroll>
    </>
  );
}

export default App;
