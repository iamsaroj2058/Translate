
'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Menu from "../components/Menu"
import menuData from "./data";
import React, { useEffect } from 'react';



export default function Home() {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
    // Load the Google Translate API script dynamically
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Define the googleTranslateElementInit function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    }; }
  }, []);

  return (
    <div> 
      <Header/>
     <Image/>
     <div id="google_translate_element"></div>

     <Menu data={menuData}/>
     
    
    </div>
  
  );
}
