import React, { useState, useEffect } from "react";
import axios from "axios";

const members = [
  {
    name: "Lê Công Bách",
    imageURL: "/anh_tv/bach.png",
    fb: "#",
  },
  {
    name: "Nguyễn Xuân Đông",
    imageURL: "/anh_tv/dong.jpg",
    fb: "#",
  },
  {
    name: "Dương Phúc Tráng",
    imageURL: "/anh_tv/trang.jpg",
    fb: "#",
  },
  {
    name: "Đinh Toàn Thắng",
    imageURL: "/anh_tv/thang.jpg",
    fb: "#",
  },
  {
    name: "Bạch Song Đức",
    imageURL: "/anh_tv/duc.jpg",
    fb: "#",
  },
  {
    name: "Hoàng Anh Minh",
    imageURL: "/anh_tv/a.minh.jpg",
    fb: "#",
  },
  {
    name: "Nguyễn Vương Anh",
    imageURL: "/anh_tv/v.anh.jpg",
    fb: "#",
  },
  {
    name: "Phạm Nhật Minh",
    imageURL: "/anh_tv/minh.jpg",
    fb: "#",
  },
];

function Footer() {
  const [mem, setMem] = useState("Our Team");
  const [view, setView] = useState("");
  const api = axios.create({
    baseURL: "https://ssg-backend.herokuapp.com/api/view/get",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get("/");
      setView((prev) => data.data);
    };
    fetchData();
  }, []);
  console.log(view);

  return (
    <section className="about container">
      <hr />
      <div className="container d-flex mt-3 row">
        <div className="desc col-lg-4 me-3 mb-3">
          <h3 className="about-title">Về dự án</h3>
          <p className="about-desc">
            FPTU Book review là một dự án thuộc bộ môn SSG104 của nhóm 2-lớp
            SE1636. Dự án sẽ tổng hợp lại những bài review trong cuộc thi "Open
            Your Book, Open Your Mind" do đại học FPT phát động, ngoài ra còn
            đem đến những đầu sách chất lượng thuộc thư viện và các đầu sách
            khác để bạn đọc có cái nhìn sơ lược về cuốn sách mình muốn đọc.{" "}
          </p>
        </div>

        <div className="team col-lg-4 mb-3 d-flex flex-column justify-content-center align-items-center">
          {/* <h3>Thành viên trong nhóm</h3> */}
          <div className="member-container">
            {members.slice(0, 4).map((member) => (
              <a
                onMouseEnter={() => setMem(member.name)}
                onMouseLeave={() => setMem("Our Team")}
                href={member.fb}
              >
                <img
                  style={{
                    width: "50px",
                    objectFit: "contain",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  className="img-fluid member"
                  src={member.imageURL}
                  alt={member.name}
                />
              </a>
            ))}
          </div>
          <div className="member-container">
            {members.slice(4, 8).map((member) => (
              <a
                onMouseEnter={() => setMem(member.name)}
                onMouseLeave={() => setMem("Our Team")}
                href={member.fb}
              >
                <img
                  style={{
                    width: "50px",
                    objectFit: "contain",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  className="img-fluid member"
                  src={member.imageURL}
                  alt={member.name}
                />
              </a>
            ))}
          </div>
          <h5 className="mt-2 memberName"> {mem}</h5>
        </div>

        <div className="col-lg-3 ms-lg-4 ms-0">
          <div>
            <h3>Liên hệ</h3>
            <p className="mb-2">
              {" "}
              <i className="far fa-phone fs-5"></i> 0981583898{" "}
            </p>
            <p className="mb-2">
              <i className="far fa-envelope fs-5"></i> bachlche163411@fpt.edu.vn
            </p>
          </div>
          <div className="mt-1">
            <h4>Thống kê truy cập</h4>
            <p className="mb-1">
              <i class="fas fa-server"></i> Toàn bộ:{" "}
              <strong>{"" ? 0 : view.view}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
