import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        console.log({ data });
      } catch (error) {
        console.error({ error });
      }
    };

    getData();
  }, []);

  return <h1>Home Page...</h1>;
};
