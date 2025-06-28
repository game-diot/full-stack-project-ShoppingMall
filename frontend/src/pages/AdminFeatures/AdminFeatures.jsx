// src/pages/AdminFeatures/AdminFeatures.js
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn"; // 假设你已经有了 cn 工具函数
import MainLayout from "../../layouts/mainLayout"; // 导入你的主布局组件

// 假设这些是你要在 AdminFeatures 页面展示的功能卡片数据
const adminFeatureCards = [
  {
    id: "products",
    title: "产品管理",
    description: "添加、编辑和删除产品信息。",
    icon: "📦", // 可以替换为实际的图标组件或 SVG
    path: "/admin/products",
  },
  {
    id: "orders",
    title: "订单管理",
    description: "查看和处理客户订单。",
    icon: "🛒",
    path: "/admin/orders",
  },
  {
    id: "users",
    title: "用户管理",
    description: "管理用户账户和权限。",
    icon: "👥",
    path: "/admin/users",
  },
  {
    id: "settings",
    title: "系统设置",
    description: "配置网站的全局设置。",
    icon: "⚙️",
    path: "/admin/settings",
  },
  {
    id: "images",
    title: "图片资源",
    description: "管理网站的特色图片和媒体资源。",
    icon: "🖼️",
    path: "/admin/dashboard", // 假设 AdminDashboard 就是图片管理页面
  },
];

function AdminFeatures() {
  // 假设这里可以有一些数据概览，比如从 Redux store 或通过 API 获取
  // const { pendingOrdersCount, newUsersToday } = useSelector(state => state.adminDashboard);

  return (
    <MainLayout>
      {" "}
      {/* 包裹在主布局中 */}
      <div className={cn("px-4 py-8 md:px-8 lg:px-12")}>
        <h1 className={cn("text-3xl md:text-4xl font-bold text-gray-900 mb-4")}>
          管理员功能概览
        </h1>
        <p className={cn("text-lg text-gray-600 mb-8")}>
          在这里管理您的网站功能、内容和用户。
        </p>

        {/* 可选：数据概览卡片 */}
        {/* <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12")}>
          <div className={cn("bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm")}>
            <h3 className={cn("text-xl font-semibold text-blue-800")}>待处理订单</h3>
            <p className={cn("text-4xl font-bold text-blue-600 mt-2")}>{pendingOrdersCount || 'N/A'}</p>
          </div>
          <div className={cn("bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm")}>
            <h3 className={cn("text-xl font-semibold text-green-800")}>今日新用户</h3>
            <p className={cn("text-4xl font-bold text-green-600 mt-2")}>{newUsersToday || 'N/A'}</p>
          </div>
        </div> */}

        {/* 功能卡片网格 */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          )}
        >
          {adminFeatureCards.map((card) => (
            <Link
              key={card.id}
              to={card.path}
              className={cn(
                "block bg-white border border-gray-200 rounded-lg shadow-md p-6",
                "hover:shadow-lg hover:border-primary-400 transition-all duration-200",
                "flex flex-col items-start"
              )}
            >
              <div className={cn("text-5xl mb-4")}>{card.icon}</div>
              <h3 className={cn("text-xl font-semibold text-gray-800 mb-2")}>
                {card.title}
              </h3>
              <p className={cn("text-gray-600 text-sm")}>{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default AdminFeatures;
