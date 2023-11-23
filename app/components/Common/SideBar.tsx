"use client";
import React, { createElement } from "react"; //createElement là một hàm được cung cấp bởi React để tạo các phần tử React.
import DialogComponent from "./DialogComponent";
import { BsHeartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiHome, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { useSideBarDrawer } from "@/lib/store";
// import { useLoginModal, useSideBarDrawer } from "@/lib/store";
// import { User } from "@prisma/client";
// import { signOut } from "next-auth/react";

const Links = [
  { title: "Home", icon: HiHome, url: "/" },
  { title: "Orders", icon: FaReceipt, url: "/user/orders" },
  { title: "Favorites", icon: BsHeartFill, url: "/user/favorites" },
  { title: "Help", icon: MdHelp, url: "/user/help" },
];

const SideBar = () => {
  // const SideBar = ({ user }: Props) => {
  // const { onOpen } = useLoginModal();

  // const showLoginComponent = () => {
  //   onSideBarClose();
  //   onOpen();
  // };

  const {isSideBarOpen, onSideBarClose} = useSideBarDrawer()

  return (
    <DialogComponent isVisible={isSideBarOpen} onClose={onSideBarClose}>
      <div className="flex justify-center pt-2 pb-4 border-b-2">
        <Link href="/" className="outline-none">
          <Image src="/img/logo.png" width={50} height={50} alt="logo" />
        </Link>
        <Link href="/" className="outline-none py-3 px-2">
          <span className="text-2xl font-medium">TK2-Food</span>
        </Link>
      </div>

      <div className="flex items-center px-3 py-4 transition-all font-semibold">
        <Image
          src='/img/humans/h1.jpg'
          width={50} height={50} alt="user-img"
          className="object-cover rounded-full"
        />
        <div className="flex flex-col space-y-2 text-sm">
          <span className="pl-4">TK2</span>
          <Link href="/user" className="pl-4 text-green-600">
            View Account
          </Link>
        </div>
      </div>

      {Links.map((link) => (
        <Link
          key={link.title} href={link.url}
          className="flex items-center p-3 transition-all font-semibold hover:text-green-500 hover:bg-green-100 rounded-md"
        >
          {createElement(link.icon, { className: "h-5 w-5 mr-4 shrink-0" })}
          <span className="pl-1">{link.title}</span>
        </Link>
      ))}
      <button className="flex items-center px-2 py-4 transition-all font-semibold border-t-2 w-full">
        <HiOutlineArrowRightOnRectangle
          className="mr-2 shrink-0"
          size={26}
        />
        <span className="pl-2">Sign Out</span>
      </button>
      
    </DialogComponent>
  )
}

export default SideBar
