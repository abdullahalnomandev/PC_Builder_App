import { Button, Dropdown } from 'antd';
import React from 'react';
import type { MenuProps } from "antd";
import {CaretDownOutlined} from '@ant-design/icons'
import Link from 'next/link';
import pcIcon from  '@/assets/images/pc-builder-logo.svg'
import Image from 'next/image';

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        href="/cpu"
      >
        CPU 
      </Link>
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
          <div className="relative flex justify-center gap-6">
            <Link href="/">
              <Image
                style={{ width: "100PX" }}
                src={pcIcon}
                height={30}
                width={60}
                alt=""
                // layout="responsive"
              />
            </Link>
            <Dropdown
              key={Math.random().toFixed(2)}
              menu={{ items }}
              placement="bottomLeft"
              arrow
            >
              <Button>
                All Catagories <CaretDownOutlined />{" "}
              </Button>
            </Dropdown>
          </div>
          <Link href="/pc-builder">
            <Button type="primary">PC Builder</Button>
          </Link>
        </div>
      </nav>
    );
};

export default Navbar;