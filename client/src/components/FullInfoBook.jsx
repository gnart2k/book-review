import React from "react";
import { Link } from "react-router-dom";
function FullInfoBook({
  title,
  createdDate,
  view,
  creator,
  description,
  imageURL,
  id,
}) {
  const date = new Date(createdDate).toLocaleDateString("en-GB");
  return (
    <div class="big-book mb-4">
      <Link to={`/post/${id}`}>
        <img class="img-fluid full-info-img" src={imageURL} alt="" />
      </Link>

      <div class="big-book-info">
        <Link to={`/post/${id}`}>
          <h3 class="big-book-title mt-3">{title}</h3>{" "}
        </Link>
        <p class="big-book-data">
          {" "}
          Ngày đăng: {date} - Lượt xem: {view}{" "}
        </p>
        <p class="big-book-author"> Người review: {creator} </p>
        <div class="big-book-desc"> {description + "..."} </div>
      </div>
    </div>
  );
}

export default FullInfoBook;
