import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { useRootStores } from "../../RootStoresProvider";
// import { useStore } from "../utils/useStore";
// import { useStores } from "../HnStoresProvider";

function NewsList() {
  const { newsStore } = useRootStores();
  const [query, setQuery] = useState("mobx");
  const [search, setSearch] = useState("");

  useEffect(() => {
    newsStore.fetchData(query);
  }, [search]);

  return useObserver(() => {
    const { news } = newsStore;

    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={() => setSearch(query)}>
          Search
        </button>
        <ul>
          {news.hits?.map((item: any, index: any) => (
            <div key={index}>
              {item.title}
            </div>
          ))}
        </ul>
      </div>
    );
  });
}

export default NewsList;
