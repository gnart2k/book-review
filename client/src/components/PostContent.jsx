import React from "react";

function PostContent({ imageURL, content }) {
  content = content.split("\n");
  return (
    <div className="content">
      <img class="article-img img-fluid mb-4" src={imageURL} alt="" />
      {
        content.map(p => <> <p> {p} </p><br /> </>)
      }
    </div>
  );
}

export default PostContent;

//post page
