import { Button } from 'antd';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <button className=' text-red-300 bg-blue-600 px-2 py-2'>Hi There</button>
      <Button type='primary'>Hi There</Button>
    </div>
  );
};

export default HomePage;