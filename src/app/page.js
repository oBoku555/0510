/*
* @author 蘇新宇 <aa40706aagmail.com>
*/ 
import Link from "next/link";
import { Navbar, NavbarBrand,NavbarCollapse,
  NavbarLink,NavbarToggle,
  Footer,FooterCopyright, FooterLink, FooterLinkGroup,
  Carousel,Card,Button,DarkThemeToggle
  } from "flowbite-react";
export default function Home() {
  
  const items = [
  {
    cover:"banner/image1.jpg",
    name:"北港朝天宮",
    description:"北港朝天宮(台文：pak)",
  },
  {
    cover:"",
    name:"",
    description:"",
  },
  {
    cover:"",
    name:"",
    description:"",
  },
  ];

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
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    <div className="bg-white">
      <div className="container mx-auto">
      { items.map(item =>
      <Card 
      className="max-w-sm"
      imgAlt={item.name}
      imgSrc={item.cover}
      >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {item.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.description}
      </p>
      <Button>
        查看更多
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      </Card>
      )
      }
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
