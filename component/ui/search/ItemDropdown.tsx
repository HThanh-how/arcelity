import React from "react";
import { Accordion } from "@chakra-ui/react";
import GetGenresApi from "../../../app/games/_api/GetGenresApi";
import GetDevelopersApi from "../../../app/games/_api/GetDeveloperApi";
import FilterList from "./FilterList";

export default function ItemDropdown() {
  const [{ genresData, isGenresLoading, isGenresError }] = GetGenresApi();
  const [{ developersData, isDevelopersLoading, isDevelopersError }] = GetDevelopersApi();
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <FilterList genres={genresData} name="genre" />
      <FilterList genres={developersData} name="developer" />
    </Accordion>
  );
}
