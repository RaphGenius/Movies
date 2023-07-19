import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetPersonDetailByIdQuery } from "../features/peopleSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import SumUpPerson from "../layout/personPage/SumUpPerson";
import DetailsPerson from "../layout/personPage/DetailsPerson";
import LoadingPage from "../components/Loading/LoadingPage";
import { Desktop, Mobile } from "../utils/ResponsiveWrapper";
function PersonPage() {
  const { id, titleMedia } = useParams();

  useEffect(() => {
    document.title = `${titleMedia}` ?? "Movie";
  }, [titleMedia]);

  const { isLoading, data } = useGetPersonDetailByIdQuery(id ?? skipToken);
  if (isLoading) return <LoadingPage />;
  if (!data || !id) return <p>Pas de data</p>;

  return (
    <main className="flex-1 min-h-screen relative px-4 lg:px-8 mt-8 max-w-bigScreen mx-auto  w-full">
      <Desktop>
        <div className="flex flex-row gap-8">
          {/* leftside */}
          <SumUpPerson data={data} />
          {/* RightSide */}
          <DetailsPerson isLoading={isLoading} data={data} id={Number(id)} />
        </div>
      </Desktop>

      <Mobile>
        <div className="flex flex-col gap-8">
          <SumUpPerson data={data} />
          <DetailsPerson isLoading={isLoading} data={data} id={Number(id)} />
        </div>
      </Mobile>
    </main>
  );
}

export default PersonPage;
