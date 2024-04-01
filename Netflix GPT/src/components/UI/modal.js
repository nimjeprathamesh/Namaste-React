import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({children, open}) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if (open) {
            document.body.style.overflow = 'hidden';
            modal.showModal();
        } else {
            document.body.style.overflow = '';
            modal.close();
        }

        return () => {
            document.body.style.overflow = '';
            modal.close();
        };
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className='w-[56rem] h-5/6 backdrop scrollbar-hidden shadow-md shadow-gray-600 bg-black'>
            {children}
        </dialog>,
        document.getElementById('modal-root'),
    );
}