import React, { FC } from "react";
import { renderImageFromApi } from "../../utils/renderImageFromApi";

export const Avatar: FC<{ avatar: string; name: string }> = ({
  avatar,
  name,
}) => {
  return (
    <div className="w-10 h-10">
      <img
        className="rounded-full"
        src={renderImageFromApi(avatar)}
        alt={name}
      />
    </div>
  );
};
