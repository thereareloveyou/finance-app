import { FC } from "react";

type HeadlineType = {
  headline: string;
};

export const Headline: FC<HeadlineType> = ({ headline }) => {
  return <div className="text-4xl font-bold mb-8">{headline}</div>;
};
