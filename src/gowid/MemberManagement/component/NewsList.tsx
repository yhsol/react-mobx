import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import NewsItemModel from "../../../models/NewsItemModel";
import { useStores } from "../../../stores/StoresProvider";
// import { useStore } from "../utils/useStore";
// import { useStores } from "../HnStoresProvider";

function NewsList() {
  const { newsStore } = useStores();
  const [query, setQuery] = useState("mobx");
  const [search, setSearch] = useState("");
  const [checkedList, setCheckedList] = useState<any>([]);

  const onClickCheck = (item: NewsItemModel) => {
    item.onClickCheck();

    if (checkedList.includes(item)) {
      setCheckedList(checkedList.filter((checked: any) => checked !== item));
    } else {
      setCheckedList(checkedList.concat(item));
    }
  };

  const checkBookmarks = () => {
    // TODO: add bookmarks with checkedList
    // const filteredList = newsStore.checkedItems.filter((item: any) =>
    //   checkedList.includes(item)
    // );
    // filteredList.forEach((item: any) => item.onClickCheck());
    // console.log(filteredList);
    // setCheckedList([]);
  };

  useEffect(() => {
    newsStore.flowFetchData(query);
  }, [search]);

  return useObserver(() => {
    const { news, requestState, newsItems, checkedItems } = newsStore;
    console.log(
      // newsItems.hits?.map((item: any) => console.log(item.newsInfo.title))
      checkedItems.map((item: NewsItemModel) =>
        console.log(item.newsInfo.title)
      )
    );

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
          {requestState === "pending" ? (
            <div>Loading..</div>
          ) : (
            newsItems.hits?.map((item: NewsItemModel, index: any) => (
              <div key={index}>
                <input
                  type="checkbox"
                  name="bookmark-check"
                  id="bookmark-check"
                  onChange={() => onClickCheck(item)}
                  defaultChecked={item.isChecked}
                />
                {item.newsInfo.title}
              </div>
            ))
          )}
        </ul>
        <button onClick={checkBookmarks}>Check</button>
      </div>
    );
  });
}

export default NewsList;
