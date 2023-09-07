import React from "react";

type Props = {
  children: React.ReactElement;
};

export default function SlideCard({ children }: Props) {
  return <div>{children}</div>;
}
