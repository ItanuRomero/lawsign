import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import PostEditor from '@/components/post/editor';
import Posts from '@/components/post/posts';

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>
      <div style={{ marginBottom: '2rem' }}>
        <h2>
          Olá,
          {' '}
          {user ? user.name : 'stranger'}
          !
        </h2>
        <p>Pronto para assinar seus documentos?</p>
      </div>
      <div>
      </div>
    </>
  );
};

export default IndexPage;
