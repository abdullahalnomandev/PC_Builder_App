import { Button, Dropdown } from "antd";
import React from "react";
import type { MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Link from "next/link";
import pcIcon from "@/assets/images/pc-builder-logo.svg";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const items= [
  {
    key: "1",
    label: <Link href="/cpu">CPU</Link>
  },
  {
    key: "2",
    label: <Link href="/motherboard">Motherboard</Link>
  },
  {
    key: "3",
    label: <Link href="/ram">Ram</Link>
  },
  {
    key: "4",
    label: <Link href="/power-supply"> Power Supply Unit</Link>
  },
  {
    key: "5",
    label: <Link href="/storage-device"> Storage Device</Link>
  },
  {
    key: "6",
    label: <Link href="/monitor"> Monitor</Link>
  },
  {
    key: "7",
    label: <Link href="/others"> Others</Link>
  }
];

const Navbar: React.FC = () => {
  const { data: session } = useSession();

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
          <Button type="primary">PC Builder</Button>{" "}
          {session && (
            <Button
              type="primary"
              style={{ background: "red" }}
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
