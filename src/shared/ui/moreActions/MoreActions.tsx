import { createRef, useState } from "react";

import { ActionsModal } from "./ui/ActionsModal/ActionsModal";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const MoreActions = () => {
  const [isActive, setIsActive] = useState(false);

  const triggerRef = createRef<HTMLButtonElement>();
  const panelRef = createRef<HTMLDivElement>();

  const handleClick = () => {
    setIsActive((active) => !active);
  };

  useOutsideClick(panelRef, () => setIsActive(false), [triggerRef]);

  return (
    <div ref={panelRef} className="relative">
      <button
        ref={triggerRef}
        style={{ backgroundImage: 'url("src/assets/Icons/Acitons.svg")' }}
        className="z-10 w-4 h-4"
        onClick={handleClick}
      ></button>
      <ActionsModal panelRef={panelRef} active={isActive} />
    </div>
  );
};
