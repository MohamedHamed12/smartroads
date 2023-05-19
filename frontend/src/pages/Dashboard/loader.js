import { queryClient } from "../../query-client";
import * as api from "../../api";

export const dashboardQuery = {
  queryKey: ["dashboard"],
  queryFn: api.dashboard,
};

const dashboardLoader = () => {
  return queryClient.fetchQuery({
    ...dashboardQuery,
    staleTime: 10000,
  });
};

export default dashboardLoader;
