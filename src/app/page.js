/*
* @author 蘇新宇 <aa40706aagmail.com>
*/
"use client";
import {useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand,NavbarCollapse,
  NavbarLink,NavbarToggle,
  Footer,FooterCopyright, FooterLink, FooterLinkGroup,
  Carousel,Card,Button,DarkThemeToggle
  } from "flowbite-react";
  import CustomCard from "@/app/components/Card";
export default function Home() {
  const[items,setItems] = useState([]);



  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data.apiData);
    }
    fetchData();
  },[]);

  return (
  <>
  <div className="bg-cyan-600">
    <div className="container mx-auto">
      <Navbar fluid rounded className="bg-cyan-600">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="whitespace-nowrap text-2xl font-bold  text-white">盜版雲林科大</span>
        </NavbarBrand>
        <NavbarToggle/>
        <NavbarCollapse>
          <NavbarLink href="#" className="text-white">
          <span className="
          hover:text-yellow-500 
          px-4 
          py-2
          hover:border-b-2"> 交通</span>
          </NavbarLink>
        <NavbarLink as={Link} href="#" className="text-white ">
          <span className="
          hover:text-yellow-500 
          px-4 
          py-2 
          hover:border-b-2">景點</span>
        </NavbarLink>
        <NavbarLink href="#" className="text-white">
          <span className="hover:text-yellow-500 
          px-4 
          py-2 
          hover:border-b-2">關於我們</span>
        </NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle />
      </Navbar>
    </div>
  </div>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="banner/image1.jpg" alt="由 象心力 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15009792" />
        <img src="images/image-2.jpg" alt="..." />
        <img src="images/image-1.jpg " alt="..." />
        <img src="images/image-3.jpg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      { items.map((item,index) =>
        <CustomCard item={item} key = {index}/>
      )}
      </div>
    </div>

    <Footer container>
    <FooterCopyright href="#" by="Flowbite™" year={2022} />
    <FooterLinkGroup>
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Licensing</FooterLink>
      <FooterLink href="#">Contact</FooterLink>
    </FooterLinkGroup>
    </Footer>
  </>
  );
}
