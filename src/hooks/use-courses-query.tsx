import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/get-courses";

export const useCoursesQuery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
  });

  return { data, isLoading, isError };
};
