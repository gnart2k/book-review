import React from 'react'
import Tag from './Tag';
function PostDesc({ category, title, creator, createdDate, view }) {
   const date = new Date(createdDate).toLocaleDateString('en-GB');
   return (
      <div className="description">
         <Tag type={category} />
         <h2> {title}</h2>
         <hr />
         <div className="d-flex my-3">
            <i className="far fa-user-circle fs-1 me-2"></i>

            <div className="info">
               <p className="lh-1 fs-6 ">{creator}</p>
               <span className="lh-1 fs-6 fw-light"> {date} </span>
               <span className="fw-light">
                  <i className="fas fa-eye"></i> {view}
               </span>
            </div>

         </div>
      </div>
   )
}

export default PostDesc
