import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
   return (
      <section class="landing container d-flex flex-column justify-content-center">
         <div class="landing-inner ms-lg-5 ms-md-5">
            <h1 class="head white-text"> Open your book, </h1>
            <h1 class="head white-text"> Open your mind... </h1>
            <p class="lead white-text">Cuộc thi review sách do Đại học FPT phát động.</p>
            <Link to="/posts/contest"><button class="btn btn-primary mt-2">Đọc ngay</button></Link>
         </div>
      </section>
   )
}

export default Landing
