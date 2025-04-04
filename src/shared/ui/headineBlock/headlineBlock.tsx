import { FC } from "react";
import { View } from "../view";

type HeadlineBlockProps = {
  link: string;
  headline: string;
  titleLink: string;
};

export const HeadlineBlock: FC<HeadlineBlockProps> = ({
  link,
  headline,
  titleLink,
}) => {
  return (
    <div className="flex items-center justify-between mb-5 w-full">
      <div className="text-xl font-bold">{headline}</div>
      <View href={link}>{titleLink}</View>
    </div>
  );
};
