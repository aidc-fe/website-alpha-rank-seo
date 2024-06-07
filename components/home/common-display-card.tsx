import { cn } from "@/lib/utils";

export default function CommonDisplayCard(props: {
  className?: string;
  innerClassName?: string;
  title?: string;
  desc?: string;
  children?: JSX.Element;
  type?: "light" | "dark" | "border";
}) {
  const {
    className,
    innerClassName,
    title,
    desc,
    children,
    type = "border",
  } = props;

  return (
    <div
      className={cn(
        "rounded-2xl",
        {
          "border bg-white/5": type === "border",
          "bg-purple-100": type === "light",
          "bg-gradient-to-b from-primary/30 to-[#A188F5]": type === "dark",
        },
        className
      )}
    >
      <div
        className={cn("flex rounded-2xl flex-col h-full p-5", innerClassName, {
          "bg-display-card-light-gradient": type === "light",
        })}
      >
        {title && (
          <div className="text-xl font-bold text-[#805fff] mb-1 capitalize">
            {title}
          </div>
        )}
        {desc && (
          <div
            className={cn(
              "text-sm mb-5 line-clamp-2",
              type === "light" ? "text-gray-500" : "opacity-50"
            )}
          >
            {desc}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
