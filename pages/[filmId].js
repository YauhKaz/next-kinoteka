import * as React from 'react';
import { useRouter } from 'next/router';

const NewUser = () => {
  const router = useRouter();
  return (
    <p>New User Page №{router.query.filmId}</p>
  )
}

export default NewUser;