import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "../utils";

interface Props extends LinkProps {
  label: string;
}

export const BackLink: FC<Props> = ({ label, className, ...props }) => {
  return (
    <Link className={cn("text-indigo-500", className)} {...props}>
      <div className="flex gap-2.5">
        <ArrowLeft /> <span>{label}</span>
      </div>
    </Link>
  );
};
