'use client';
import { signOut, useSession } from 'next-auth/react';
import { db } from './firebase';
import { collection , query } from 'firebase/firestore';
import {useCollection} from 'react-firebase-hooks/firestore';

export default function Home() {
  const session = useSession();

 
  const [users, loading, error] = useCollection(query(collection(db, 'users')));
  return (
    <> 
      {users?.docs[0].data().email}
      <div >{session?.data?.user?.name }</div>
      <button onClick={() => signOut()}>Logout</button>
    </>
  )
}
