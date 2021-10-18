import React, { useContext, useState, useEffect } from "react";
import PostsItem from "../components/PostsItem";
import Tag from "../components/Tag";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import SuggestContainer from "../components/SuggestContainer";
import api from "../axios";
import { useParams } from "react-router-dom";
function Posts() {
  let { category } = useParams();
  const [data, setData] = useState([]);
  const [timeData, setTimeData] = useState();
  const [viewData, setViewData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const content = await api.get(`/category/${category}`);
      setData((prev) => content.data);

      const view = await api.get(`/get`);
      const date = await api.get(`/get`);
      setTimeData((prev) =>
        date.data.sort((a, b) => {
          const date1 = new Date(a.updatedAt).getTime();
          const date2 = new Date(b.updatedAt).getTime();
          return date2 - date1;
        })
      );
      setViewData((prev) =>
        view.data.sort((a, b) => {
          return b.views - a.views;
        })
      );
    };
    fetchData();
  }, [category]);
  if (timeData) {
    const date1 = new Date(timeData[0].updatedAt).getTime();
    console.log(date1);
  }
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <Tag type={category} />
        <div className="row container d-flex justify-content-between">
          <div className="col-lg-8">
            {data.map((a) => (
              <PostsItem
                id={a._id}
                title={a.title}
                createdDate={a.createdAt}
                view={a.views}
                creator={a.creator}
                imageURL={a.imgUrl}
                description={a.desc}
              />
            ))}
          </div>
          <div className="col-lg-3">
            <SuggestContainer type="Bài mới" data={timeData} />
            <SuggestContainer type="Bài viết nổi bật" data={viewData} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Posts;
