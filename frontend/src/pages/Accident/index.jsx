import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import fallbackSrc from "~assets/accident-fallback.jpg";
import { queryClient } from "~/query-client";
import * as api from "~api";

export const accidentQuery = (id) => ({
  queryKey: ["accident", id],
  queryFn: () => api.accident(id),
});

export const accidentLoader = ({ params: { id } }) => {
  return queryClient.fetchQuery({
    ...accidentQuery(id),
    staleTime: 10000,
  });
};

function Accident() {
  const { id } = useParams();
  const { data: accident } = useQuery(accidentQuery(id));

  return (
    <>
      <Carousel
        images={[
          accident.imag ?? fallbackSrc,
          "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        ]}
      />

      <Outlet />
    </>
  );
}

export default Accident;
