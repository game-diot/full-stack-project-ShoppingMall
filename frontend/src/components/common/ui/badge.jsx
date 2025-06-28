import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
// 定义Badge徽标组件，同一类名样式，cva接收两个参数，前者为base基础默认通用类，后者为样式变体
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
// 定义Badge徽标组件，接收类名、变体、属性参数，使用cn处理类名合并，返回Badge徽标元素
function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
// 导出Badge徽标组件、badgeVariants徽标变体
export { Badge, badgeVariants };
