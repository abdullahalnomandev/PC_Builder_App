import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
             <p>Not Found</p>
        </div>
    );
};

export default NotFoundPage;

NotFoundPage.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};