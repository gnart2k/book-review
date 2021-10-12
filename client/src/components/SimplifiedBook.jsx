import React from "react";
import { Link } from "react-router-dom";
function SimplifiedBook({
  title,
  createdDate,
  view,
  imageURL,
  description,
  id,
}) {
  const date = new Date(createdDate).toLocaleDateString('en-GB');
  return (
    <div class="sm-book mb-3">
      <Link to={`/post/${id}`}>
        <img class="img-fluid" src={imageURL} alt="" />
      </Link>
      <div class="sm-book-info">
        <Link to={`/post/${id}`}>
          <p class="sm-book-title fw-bold">{title}</p>
        </Link>
        <p>Ngày đăng: {date}</p>
        <p> Lượt xem: {view}</p>
        <div class="big-book-desc"> {description.slice(0, 61) + "..."}</div>
      </div>
    </div>
  );
}

export default SimplifiedBook;

//cac bai du thi
