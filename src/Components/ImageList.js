import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import LoadingSpinner from "./LoadingSpinner";

const ImageList = () => {
  const getRandomPageNumber = Math.floor(Math.random() * 1000) + 1;
  const API_KEY = "-Gp9A6SdZAqZdZxDX6AQj11D881e9ppbEhAWRndzwjs";

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      await axios
        .get(
          `https://api.unsplash.com/photos?page=${getRandomPageNumber}&per_page=100&order_by='popular'`,
          {
            headers: {
              Authorization: `Client-ID ${API_KEY}`,
            },
          }
        )
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        });
      //console.log(getAllImages.data);
    };
    getImages();
  }, []);

  return <>{isLoading ? <LoadingSpinner /> : <ImageCard data={data} />}</>;
};

export default ImageList;
