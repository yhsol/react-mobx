import React, { useState, useEffect } from "react";
// import { useStore } from "../utils/useStore";
import { useObserver } from "mobx-react-lite";
import { useRootStores } from "../../RootStoresProvider";
// import { useStores } from "../HnStoresProvider";

function NewsList() {
  const { newsStore } = useRootStores();

  useEffect(() => {
    newsStore.fetchData();
  }, []);

  return useObserver(() => {
    const { news, hits, requestState } = newsStore;
    console.log(requestState);

    return (<ul>
      {/* {news.hits.map((item: Hits) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))} */}
      {/* {hits.map((item: string, index: any) => (
        <div key={index}>{item}</div>
      ))} */}
      {news.hits?.map((item: any, index: any) => (
        <div key={index}>
          {item.title}
        </div>
      ))}
      {/* {hits.hits?.map((item: any, index: any) => (
        <div key={index}>
          {item.title}
        </div>
      ))} */}
      {/* test */}
    </ul>);
  });
}

export default NewsList;
