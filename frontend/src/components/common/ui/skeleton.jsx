import { cn } from "../../../utils/cn";

// 定义骨架屏组件,一个脉冲动画,提高用户体验
function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
