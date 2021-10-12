import React from 'react'

function Tag({ type }) {

   let tagName = '';
   switch (type) {
      case 'fptBook':
         tagName = "Sách thuộc thư viện FPT";
         break;
      case 'contest':
         tagName = "Open your book, open your mind..."
         break;
      default:
         tagName = "Các đầu sách hay"
         break;
   }

   return (
      <div>
         <p> <i class="far fa-caret-square-right"></i> {tagName}</p>
         <hr />
      </div>
   )
}

export default Tag
