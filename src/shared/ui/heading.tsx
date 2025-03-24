import React, { PropsWithChildren } from "react";
import { cn } from "../utils";

interface Props {
  className?: string;
}

export const Heading: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return <h1 className={cn("text-4xl max-xl:text-2xl", className)}>{children}</h1>;
};
