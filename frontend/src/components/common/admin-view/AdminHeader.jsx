import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";

import { logoutUser } from "@/store/auth-slice";
// 定义管理员头部组件,接收setOpen作为参数,用于控制侧边栏的打开和关闭
function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();
  // 定义注销用户的函数
  function handleLogout() {
    dispatch(logoutUser());
  }
  // 导出管理员头部组件,分为左右两个部分,横线扩展框按钮,lagout按钮
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
