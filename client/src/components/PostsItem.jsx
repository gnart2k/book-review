import React from "react";
import { Link } from "react-router-dom";

function PostsItem({ id, title, createdDate, view, imageURL, description }) {
  const date = new Date(createdDate).toLocaleDateString('en-GB');
  return (
    <div className="book d-flex my-4 flex-lg-row flex-column">

      <Link to={`/post/${id}`}>
        <img className="post-item-img me-2 ms-2 mb-2 mb-lg-0" src={imageURL} alt="" />
      </Link>

      <div className="desc ms-2">
        <Link to={`/post/${id}`}>
          <h5 className="post-item-title fw-bold">{title}</h5>
        </Link>
        <p className="lh-2 d-none d-lg-block">
          Ngày đăng: {date} - Lượt xem: {view}
        </p>
        <p className="lh-2">{description}</p>
      </div>

    </div>
  );
}

export default PostsItem;

//posts page
