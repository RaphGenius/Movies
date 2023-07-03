import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Media_typeType } from "../type/type";
import { useGetPersonDetailByIdQuery } from "../features/peopleSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import SumUpPerson from "../layout/personPage/SumUpPerson";
import DetailsPerson from "../layout/personPage/DetailsPerson";
function PersonPage() {
  const { id, titleMedia } = useParams();
  const location = useLocation();
  const mediaType = location.pathname.split("/")[1] as Media_typeType;

  useEffect(() => {
    document.title = `${titleMedia}` ?? "Movie";
  }, [titleMedia]);

  const { isLoading, data } = useGetPersonDetailByIdQuery(id ?? skipToken);
  if (!data || !id) return <p>Pas de data</p>;

  return (
    <main className="flex-1 min-h-screen relative px-8 mt-8 flex max-w-bigScreen mx-auto w-full gap-8 ">
      {/* leftside */}
      <SumUpPerson data={data} />
      {/* RightSide */}

      <DetailsPerson isLoading={isLoading} data={data} id={Number(id)} />
    </main>
  );
}

export default PersonPage;
