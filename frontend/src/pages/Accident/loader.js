import { queryClient } from "../../query-client";
import * as api from "~api";

export const accidentQuery = (id) => ({
  queryKey: ["accident", id],
  queryFn: () => api.accident(id),
});

const accidentLoader = ({ params: { id } }) => {
  return queryClient.fetchQuery({
    ...accidentQuery(id),
    staleTime: 10000,
  });
};

export default accidentLoader;
