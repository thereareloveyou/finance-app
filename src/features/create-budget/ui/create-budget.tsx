import { createRef, useState } from 'react'
import { Button } from '../../../shared/ui/button/button';
import { useOutsideClick } from '../../../shared/hooks/useOutsideClick';

import styles from './create-budget.module.css'
import { ModalBudget } from '../../../shared/ui/modalBudget';

export const CreateBudget = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false);

    const triggerRef = createRef<HTMLButtonElement>();
    const modalRef = createRef<HTMLDivElement>();
  
    const handleClick = () => {
      setActiveModal((active) => !active);
    };
  
    useOutsideClick(modalRef, () => setActiveModal(false), [triggerRef]);
  
    return (
      <div>
        <Button ref={triggerRef} onClick={handleClick} classN={styles.button_add}>
          + Add New Budget
        </Button>
        <ModalBudget ref={modalRef} activeModal={activeModal}/>
      </div>
    );
}

