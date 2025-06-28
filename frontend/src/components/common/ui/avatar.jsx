import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../../utils/cn";

// 定义Avatar头像组件，可以转发ref，接收CSS类名及其属性作为参数，使用cn处理样式，设置其displayName为AvatarPrimitive.Root的displayName便于显示查看
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    // 统一头像尺寸，参数类名覆盖默认类名，接收属性仍保留
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
// 定义AvatarImage图像组件，转发ref，接收CSS类名及其属性作为参数，使用cn处理样式，设置其displayName为AvatarPrimitive.Image的displayName便于显示查看
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// 定义AvatarFallback图片加载失败组件，转发ref，接收CSS类名及其属性作为参数，使用cn处理样式，设置其displayName为AvatarPrimitive.Fallback的displayName便于显示查看
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
// 导出Avatar头像组件、AvatarImage图像组件、AvatarFallback图片加载失败组件
export { Avatar, AvatarImage, AvatarFallback };
