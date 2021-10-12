import React, { useState, useEffect } from "react";
import PostDesc from "../components/PostDesc";
import PostContent from "../components/PostContent";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import SuggestContainer from "../components/SuggestContainer";
import RowSuggestionContainer from "../components/RowSuggestionContainer";
import api from "../axios";
import { useParams } from "react-router-dom";
function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [timeData, setTimeData] = useState();
  const [viewData, setViewData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get(`/${id}`);
      setPost((prev) => data.data);

      const allData = await api.get(`/getOther/${id}`);
      setViewData((prev) =>
        allData.data.sort((a, b) => {
          return a.views - b.views;
        })
      );

      setTimeData((prev) => allData.data.reverse());
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <Navbar />
      <section className="article container mx-auto row d-flex justify-content-between mt-4">
        <div className="col-lg-8 mt-5">
          {post && (
            <PostDesc
              category={post.category}
              title={post.title}
              creator={post.creator}
              createdDate={post.createdAt}
              view={post.views}
            />
          )}
          {post && (
            <PostContent imageURL={post.imgUrl} content={post.content} />
          )}
        </div>
        <div className="col-lg-3 mt-5">
          <SuggestContainer type="Bài mới" data={timeData} />
          <SuggestContainer type="Bài viết nổi bật" data={viewData} />
        </div>
      </section>
      <RowSuggestionContainer data={timeData} />
      <Footer />
    </div>
  );
}

export default Post;
