import * as React from "react";
import { cn } from "../../../utils/cn";
// 定义卡片组件，接收类名、属性参数，使用cn处理类名合并，返回卡片元素
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";
// 定义卡片标题组件，接收类名、属性参数，使用cn处理类名合并，返回卡片标题元素
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";
// 定义卡片标题组件，接收类名、属性参数，使用cn处理类名合并，返回卡片标题元素
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";
// 定义卡片描述组件，接收类名、属性参数，使用cn处理类名合并，返回卡片描述元素
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";
// 定义卡片内容组件，接收类名、属性参数，使用cn处理类名合并，返回卡片内容元素
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";
// 定义卡片底部组件，接收类名、属性参数，使用cn处理类名合并，返回卡片底部元素
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
// 导出卡片组件、卡片标题组件、卡片描述组件、卡片内容组件、卡片底部组件
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
