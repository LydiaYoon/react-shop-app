'use client';
import React, { useState } from 'react';
import Modal from './Modal';

import styles from './modal.module.scss';

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div
          className={styles.modalWrapperStyle}
          onClick={() => console.log('clicked')}
        >
          <button onClick={() => setIsModalOpen(true)}>open</button>

          {/* modal */}
          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            modal contents
          </Modal>
        </div>

        <div className={styles.higherIndexWrapperStyle}>Z-index 2</div>
      </div>
      <div id="portal" />
    </>
  );
};

export default page;
