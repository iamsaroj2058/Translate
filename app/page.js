import Image from "next/image";
import Header from "@/components/Header";
import Menu from "../components/Menu"
import menuData from "./data";


export default function Home() {
  console.log(menuData);

  return (
    <div> 
      <Header/>
     <Image/>
     <Menu data={menuData}/>
     
    </div>
  
  );
}
