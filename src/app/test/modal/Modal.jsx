'use client';
import React from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return createPortal(
    <>
      <div className={styles.overlayStyle} />
      <div className={styles.modalStyle}>
        <button onClick={onClose}>close</button>
        {children}
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
