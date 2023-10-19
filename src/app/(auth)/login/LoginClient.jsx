'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';

import styles from './Auth.module.scss';
import Loader from '@/components/loader/Loader';

const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push('/');
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {
    //
  };

  return (
    <>
      <Loader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>

          <form className={styles.form} onSubmit={loginUser}>
            {/* Input */}
            Input
            <div className={styles.group}>
              {/* 자동 로그인, 비밀번호 수정 */}
              자동 로그인, 비밀번호 수정
            </div>
            <div className={styles.buttonGroup}>
              {/* Button */}
              Button
              <div>
                {/* Button */}
                Button
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;