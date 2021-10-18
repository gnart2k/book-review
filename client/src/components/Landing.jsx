import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
   return (
      <section class="landing container d-flex flex-row justify-content-start align-items-center">
         <div class="landing-inner ms-lg-5 ms-md-5 d-flex flex-column align-items-left">
            <h1 class="head white-text"> Open your book, </h1>
            <h1 class="head white-text"> Open your mind... </h1>
            <p class="lead white-text">Cuộc thi review sách do Đại học FPT phát động.</p>
            <Link to="/posts/contest"><button class="btn btn-primary mt-4">Đọc ngay</button></Link>
         </div>
      </section>
   )
}

export default Landing
