import React from "react";
import SimplifiedBook from "./SimplifiedBook";

//
function SuggestContainer({ type, data }) {
  return (
    <div class="mb-4">
      <h5 class="mt-2 lh-1"> {type}</h5>
      <hr />
      {/* bai viet noi bat */}
      {data && (
        <SimplifiedBook
          title={data[0].title}
          createdDate={data[0].createdAt}
          view={data[0].views}
          imageURL={data[0].imgUrl}
          description={data[0].desc}
          id={data[0]._id}
        />
      )}
      {data && (
        <SimplifiedBook
          title={data[1].title}
          createdDate={data[1].createdAt}
          view={data[1].views}
          imageURL={data[1].imgUrl}
          description={data[1].desc}
          id={data[1]._id}
        />
      )}
    </div>
  );
}

export default SuggestContainer;
