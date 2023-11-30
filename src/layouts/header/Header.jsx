'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { toast } from 'react-toastify';

import styles from './Header.module.scss';
import InnerHeader from '../innerHeader/InnerHeader';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf('@')); // 이메일의 id 부분 가져오기
          const uName = u1.chatAt(0).toUpperCasE() + u1.slice(1); // 첫번째 글자 대문자
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        // TODO: 유저 정보를 redux store에 저장하기
      } else {
        setDisplayName('');
        // TODO: 유저 정보를 redux store에서 지우기
      }
    });
  }, []);

  const logoutUser = () => {
    signOut(auth)
      .then((result) => {
        toast.success('로그아웃 되었습니다.');
        router.push('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (
    pathName === '/login' ||
    pathName === '/register' ||
    pathName === '/reset'
  ) {
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={'/login'}>로그인</Link>
          </li>
          <li className={styles.item}>
            <Link href={'/admin/dashboard'}>관리자</Link>
          </li>
          <li className={styles.item}>
            <Link href={'/order-history'}>주문 목록</Link>
          </li>
          <li className={styles.item}>
            <Link href={'/'} onClick={logoutUser}>
              로그아웃
            </Link>
          </li>

          <li className={styles.item}>
            <Link href={'/'}>재휴 마케팅</Link>
          </li>
          <li className={styles.item}>
            <Link href={'/'}>쿠팡 플레이</Link>
          </li>
          <li className={styles.item}>
            <Link href={'/'}>고객센터</Link>
          </li>
        </ul>
      </div>

      {pathName.startsWith('/admin') ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
