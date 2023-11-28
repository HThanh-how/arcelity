import React from "react";
import { Accordion } from "@chakra-ui/react";
import FilterList from "./FilterList";
import GetGenresApi from "../_api/GetGenresApi";
import GetDevelopersApi from "../_api/GetDeveloperApi";

export default function ItemDropdown() {
  const [{ genresData, isGenresLoading, isGenresError }] = GetGenresApi();
  const [{ developersData, isDevelopersLoading, isDevelopersError }] =
    GetDevelopersApi();
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <FilterList genres={genresData} name="genre" />
      <FilterList genres={developersData} name="developer" />
    </Accordion>
  );
}
