import{ FC, Ref } from "react";

import cn from "classnames";

export const ActionsModal: FC<{ active: boolean; panelRef:  Ref<HTMLDivElement> | undefined }> = ({
  active,
  panelRef,
}) => {
  return (
    <div
      ref={panelRef}
      className={cn(
        "bg-white rounded-lg py-3 px-5 flex flex-col gap-3 absolute top-6 right-0 drop-shadow-block backdrop-blur-xl w-[150px] cursor-pointer",
        {
          hidden: !active,
        }
      )}
    >
      <span>Edit Budget</span>
      <span>Delete Budget</span>
    </div>
  );
};
