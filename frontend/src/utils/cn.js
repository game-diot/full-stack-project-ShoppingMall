// 导入clsx包，可以组合css类名
import { clsx } from "clsx";
// 导入tailwind-merge包，用于解决css相同类设置多个参数，后者覆盖前者。
import { twMerge } from "tailwind-merge";

// cn 函数返回的是一个经过条件处理且冲突已解决的优化类名字符串，可以直接用于你的 React 组件的 className 属性
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
