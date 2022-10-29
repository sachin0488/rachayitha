import { useQuery } from "@tanstack/react-query";
import { fetchExploreSection } from "./explore.api";

export const useExplore = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["use-explore"],
    fetchExploreSection
  );
  return { data, isLoading, isError, error, isFetching };
};
