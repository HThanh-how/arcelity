"use client";
import ProductSection from "../component/ProductSection";
import NameTag from "../component/NameTag";
import { Container } from "postcss";
import { Box } from "@chakra-ui/react";
import HeroSection from "@/component/HeroSection";
import SearchBar from "@/component/SearchBar";


export default function WithSubnavigation() {
 

  return (
    <>
    
    <SearchBar/>
    <HeroSection/>
    {/* <NameTag/> */}
    <ProductSection/>
    
    
    </>
  )
}
