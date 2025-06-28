// src/pages/NotFoundPage/NotFoundPage.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn"; // 假设你已经有了 cn 工具函数
// import NotFoundIllustration from '../../assets/images/not-found-illustration.svg'; // 假设你有插画
import MainLayout from "../../layouts/mainLayout"; // 导入你的主布局组件

function NotFoundPage() {
  const navigate = useNavigate(); // 用于编程式导航

  return (
    // 使用你的主布局组件，保持页面整体风格一致
    <MainLayout>
      <div
        className={cn(
          "flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-4 py-12"
        )}
      >
        <h1
          className={cn(
            "text-6xl md:text-8xl font-extrabold text-primary-600 mb-4"
          )}
        >
          404
        </h1>
        <h2 className={cn("text-3xl md:text-4xl font-bold text-gray-800 mb-6")}>
          页面未找到
        </h2>
        {/* 如果有插画，可以在这里显示 */}
        {/* <img
          src={NotFoundIllustration}
          alt="Page Not Found"
          className={cn("w-64 h-64 mb-8")}
        /> */}
        <p className={cn("text-lg text-gray-600 mb-8 max-w-md")}>
          很抱歉，你正在寻找的页面可能已被删除，名称已更改，或者暂时不可用。
        </p>
        <div className={cn("flex flex-col sm:flex-row gap-4")}>
          <button
            onClick={() => navigate("/")} // 返回首页
            className={cn(
              "px-6 py-3 bg-primary-500 text-white font-semibold rounded-md shadow-md",
              "hover:bg-primary-600 transition-colors duration-300"
            )}
          >
            返回首页
          </button>
          <button
            onClick={() => navigate(-1)} // 返回上一页
            className={cn(
              "px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-md shadow-sm",
              "hover:bg-gray-100 transition-colors duration-300"
            )}
          >
            返回上一页
          </button>
          {/* 也可以添加其他常用链接 */}
          {/* <Link to="/products" className={cn("text-primary-500 hover:underline")}>
            查看所有产品
          </Link> */}
        </div>
      </div>
    </MainLayout>
  );
}

export default NotFoundPage;
