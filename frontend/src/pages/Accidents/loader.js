import { queryClient } from "../../query-client";
import * as api from "../../api";

export const accidentsQuery = {
  queryKey: ["accidents"],
  queryFn: api.accidents,
};

const accidentsLoader = () => {
  return queryClient.fetchQuery({
    ...accidentsQuery,
    staleTime: 10000,
  });
};

export default accidentsLoader;
