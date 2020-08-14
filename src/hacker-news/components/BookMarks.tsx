import React from "react";
import { useObserver } from "mobx-react-lite";
import { NewsStore } from "../stores/newsStore";
import { useRootStores } from "../../RootStoresProvider";

function BookMarks() {
  const { newsStore } = useRootStores();

  return useObserver(() => {
    const { checkedItems } = newsStore;

    return (
      <div>
        {checkedItems.map((item, index) => (
          <div key={index}>{item.newsInfo.title}</div>
        ))}
      </div>
    );
  });
}

export default BookMarks;
