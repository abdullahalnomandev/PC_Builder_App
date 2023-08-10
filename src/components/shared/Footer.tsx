import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;


const FooterPage = () => {
  return (
    <div>
      <Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default FooterPage;