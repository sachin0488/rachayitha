import { useQuery } from "@tanstack/react-query";
import fetchBookDetail from "./bookDetail.api";

const useBookDetail = (book) => {
  //   console.log(book, "book");
  //   console.log(book, "book2");

  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["use-book", book],
    () => fetchBookDetail(book)
  );
  //   console.log(isError, "isError");
  //   console.log(data);
  return { data, isLoading, isError, error, isFetching };
};

export default useBookDetail;
