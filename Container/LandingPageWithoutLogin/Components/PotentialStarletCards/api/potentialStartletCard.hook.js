import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPotentialStarletCard } from "./potentialStarletCard.api";

const potentialStartletCardHook = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["use-potential"],
    fetchPotentialStarletCard
  );
  return { data, isLoading, isError, error, isFetching };
};

export default potentialStartletCardHook;
