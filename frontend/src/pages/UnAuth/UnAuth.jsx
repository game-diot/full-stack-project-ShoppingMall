// src/pages/UnauthPage/UnauthPage.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn"; // 导入 cn 工具函数，用于 Tailwind CSS 类名合并
import MainLayout from "../../layouts/mainLayout"; // 导入你的主布局组件
// import LockIllustration from '../../assets/images/lock-illustration.svg'; // 假设你有一个锁的插画

function UnauthPage() {
  const navigate = useNavigate(); // 用于编程式导航

  return (
    // 将无权限页面也包裹在主布局中，保持整体风格统一
    <MainLayout>
      <div
        className={cn(
          "flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-4 py-12"
        )}
      >
        <h1
          className={cn(
            "text-6xl md:text-8xl font-extrabold text-red-500 mb-4"
          )}
        >
          🚫
        </h1>
        {/* 如果有插画，可以在这里显示 */}
        {/* <img
          src={LockIllustration}
          alt="Access Denied"
          className={cn("w-64 h-64 mb-8")}
        /> */}
        <h2 className={cn("text-3xl md:text-4xl font-bold text-gray-800 mb-6")}>
          访问受限
        </h2>
        <p className={cn("text-lg text-gray-600 mb-8 max-w-md")}>
          很抱歉，您没有足够的权限访问此页面。这可能是因为您尚未登录，或者您的账户类型不支持此功能。
        </p>
        <div className={cn("flex flex-col sm:flex-row gap-4")}>
          {/* 假设登录是解决权限不足最常见的方案 */}
          <Link
            to="/auth/login" // 跳转到登录页面
            className={cn(
              "px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md",
              "hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            )}
          >
            去登录
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </Link>

          <button
            onClick={() => navigate("/")} // 返回首页
            className={cn(
              "px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-md shadow-sm",
              "hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            )}
          >
            返回首页
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7m-7-7v10a1 1 0 01-1 1h-3"
              />
            </svg>
          </button>
        </div>
        <p className={cn("mt-6 text-sm text-gray-500")}>
          如果您认为这是个错误，请联系管理员。
        </p>
      </div>
    </MainLayout>
  );
}

export default UnauthPage;
