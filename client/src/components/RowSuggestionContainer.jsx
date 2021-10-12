import React, { useState, useEffect } from "react";
import SimplifiedBook from "./SimplifiedBook";
function RowSuggestionContainer(data) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts((prev) => data.data);
  });
  return (
    <section class="main-suggestion container mt-5 d-lg-block d-none">
      <div class="container mb-3">
        <h3>Các bài viết khác...</h3>
        <hr />
      </div>
      <div class="row container d-flex">
        {posts &&
          posts.map((post) => {
            return (
              <div class="sm-book mb-5 col-lg-4">
                <SimplifiedBook
                  title={post.title}
                  createdDate={post.createdAt}
                  view={post.views}
                  creator={post.creator}
                  description={post.desc}
                  imageURL={post.imgUrl}
                  id={post._id}
                />
              </div>

            );
          })}
      </div>
    </section>
  );
}

export default RowSuggestionContainer;
