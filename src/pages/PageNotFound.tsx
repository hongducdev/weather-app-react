import React from "react";

import Image404 from "../assets/images/image404.png";

const PageNotFound = () => {
   return (
      <div className="w-screen h-screen bg-backgroundColor flex items-center justify-center flex-col">
         <img src={Image404} alt="Image 404" className="select-none" />
         <h2 className="font-bold capitalize text-4xl">
            Trang bạn tìm kiếm không tồn tại
         </h2>
         <p className="mt-5 text-lg">
            Vui lòng kiểm tra lại đường dẫn hoặc quay lại{" "}
            <a href="/" className="text-orange">
               trang chủ
            </a>
         </p>
      </div>
   );
};

export default PageNotFound;
