import { Button, Dropdown } from 'antd';
import React from 'react';
import type { MenuProps } from "antd";
import {CaretDownOutlined} from '@ant-design/icons'
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        CPU / Processor
      </a>
    )
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Motherboard
      </a>
    )
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        RAM
      </a>
    )
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Power Supply Unit
      </a>
    )
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Storage Device
      </a>
    )
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Monitor
      </a>
    )
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Others
      </a>
    )
  }
];

const Navbar:React.FC = () => {

    return (
      <nav className="bg-[#141d39] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="relative">
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Button>
                All Catagories <CaretDownOutlined />{" "}
              </Button>
            </Dropdown>
          </div>
          <Button type="primary"  >
            PC Builder
          </Button>
        </div>
      </nav>
    );
};

export default Navbar;