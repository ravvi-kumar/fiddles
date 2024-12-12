import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
function MarginWrapper({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn("mx-auto max-w-[min(1440px,calc(100%-2rem))]", className)}
    >
      {children}
    </div>
  );
}

export default MarginWrapper;
