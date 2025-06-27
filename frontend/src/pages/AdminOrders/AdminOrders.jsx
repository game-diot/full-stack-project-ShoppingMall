import React from "react";
import MainLayout from "../../layouts/MainLayout"; // 你的主布局
import AdminOrdersView from "@/components/admin-view/orders"; // 导入订单视图组件
import { cn } from "../../utils/cn"; // 导入 cn 工具函数
import { Link } from "react-router-dom"; // 用于面包屑导航

function AdminOrders() {
  return (
    <MainLayout>
      <div className={cn("px-4 py-8 md:px-8 lg:px-12")}>
        {/* 页面标题和面包屑导航 */}
        <div className={cn("mb-6")}>
          <h1 className={cn("text-3xl md:text-4xl font-bold text-gray-900")}>
            订单管理
          </h1>
          <nav className="text-sm text-gray-500 mt-2">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link
                  to="/admin/dashboard"
                  className="text-blue-600 hover:underline"
                >
                  控制面板
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-800">订单管理</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* 页面级操作按钮（可选） */}
        {/* <div className={cn("mb-6 flex justify-end")}>
          <button className={cn(
            "px-4 py-2 bg-green-500 text-white rounded-md shadow-sm",
            "hover:bg-green-600 transition-colors duration-200"
          )}>
            导出订单数据
          </button>
        </div> */}

        {/* 核心的订单视图组件 */}
        <AdminOrdersView />
      </div>
    </MainLayout>
  );
}

export default AdminOrders;
