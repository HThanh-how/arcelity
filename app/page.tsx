"use client";
import ProductSection from "../component/OnSaleSection/ProductSection";
import { Container } from "postcss";
import { Box } from "@chakra-ui/react";
import HeroSection from "@/component/HeroSection/HeroSection";
import SearchBar from "@/component/Layout/SearchBar";
import TopTable from "@/component/TopGames/TopTableSection";

export default function WithSubnavigation() {
  return (
    <>
      <SearchBar /> 
      <HeroSection />
      <ProductSection />
      <TopTable />
    </>
  );
}
