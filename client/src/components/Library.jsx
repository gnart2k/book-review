import React from "react";
import { Link } from "react-router-dom";
import FullInfoBook from "./FullInfoBook";
import SimplifiedBook from "./SimplifiedBook";

function Library({ type, data }) {
  // CreateBook Info
  const switcher = (type) => {
    switch (type) {
      case "Open Your Book, Open Your Mind":
        return <Link to={`/posts/contest`}>Xem thêm...</Link>;
      case "Sách thuộc thư viện FPT":
        return <Link to={`/posts/fptBook`}>Xem thêm...</Link>;
      default:
        return <Link to={`/posts/other`}>Xem thêm...</Link>;
    }
  };
  // const last = data.length - 1;
  return (
    <section class="library container mb-2">
      <div class="library-title mb-4 d-flex justify-content-between align-items-end">
        {
          type == 'Open Your Book, Open Your Mind' ?
            (
              <div class="">
                <h2 class="category-title mb-0 d-block d-sm-inline ">Open Your Book, </h2>
                <h2 class="category-title mb-0 d-block d-sm-inline">Open Your Mind</h2>
              </div>
            )
            : (<h2 class="category-title mb-0">{type}</h2>)
        }

        {switcher(type)}
      </div >
      <div className="row">
        <div className="col-lg-9">
          {data && (
            <FullInfoBook
              title={data[data.length - 1].title}
              createdDate={data[data.length - 1].createdAt}
              view={data[data.length - 1].views}
              imageURL={data[data.length - 1].imgUrl}
              description={data[data.length - 1].desc}
              creator={data[data.length - 1].creator}
              id={data[data.length - 1]._id}
            />
          )}
        </div>

        <div className="col-lg-3">
          {data && (
            <SimplifiedBook
              title={data[data.length - 2].title}
              createdDate={data[data.length - 2].createdAt}
              view={data[data.length - 2].views}
              imageURL={data[data.length - 2].imgUrl}
              description={data[data.length - 2].desc}
              id={data[data.length - 2]._id}
            />
          )}
          {data && (
            <SimplifiedBook
              title={data[data.length - 3].title}
              createdDate={data[data.length - 3].createdAt}
              view={data[data.length - 3].views}
              imageURL={data[data.length - 3].imgUrl}
              description={data[data.length - 3].desc}
              id={data[data.length - 3]._id}
            />
          )}
        </div>
      </div>
    </section >
  );
}

export default Library;
