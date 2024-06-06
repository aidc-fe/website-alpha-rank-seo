import { cn } from "@/lib/utils";

export default function CommonDisplayCard(props: {
  className?: string;
  title: string;
  desc?: string;
  descClass?: string;
  children?: JSX.Element;
  lightBg?: boolean;
}) {
  const { className, title, desc, descClass, children, lightBg } = props;

  return (
    <div className={cn("p-5 rounded-2xl flex flex-col", className)}>
      <div className="text-xl font-bold text-primary mb-1 capitalize">
        {title}
      </div>
      <div
        className={cn(
          "text-sm mb-5 line-clamp-2",
          lightBg ? "text-gray-500" : "opacity-50",
          descClass
        )}
      >
        {desc}
      </div>
      {children}
    </div>
  );
}
