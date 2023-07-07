import { SubInformation, TitleDetail } from "../../components/MediaDetail";
import ImgCard from "../../components/card/ImgCard";
import Subtitle from "../../components/text/Subtitle";
import { PersonDetailType } from "../../type/People";
import formatDate from "../../utils/formatDate";
import { getAge } from "../../utils/formatDateNumbers";
import { getBigProfilImage } from "../../utils/getImage";
import { getGender } from "../../utils/getInformations";
import { getNotFoundImage } from "../../utils/getNotFoundImage";

type Props = {
  data: PersonDetailType;
};
export default function SumUpPerson({ data }: Props) {
  const deathDayDate = getAge(data?.deathday);

  const subInformationsData = [
    {
      title: "Célèbre pour",
      information: data.known_for_department,
    },
    {
      title: "Genre",
      information: getGender(data.gender),
    },
    {
      title: "Date de naissance",
      information: `${data.birthday ? formatDate(data.birthday) : "-"} ${
        data.deathday ? `- (${deathDayDate}ans)` : ""
      }   `,
    },
    {
      title: "Date de décès",
      information:
        data.deathday && `${formatDate(data.deathday)} - (${deathDayDate}ans) `,
    },
    {
      title: "Lieu de naissance",
      information: data.place_of_birth,
    },
    {
      title: "Alias",
      information: data.also_known_as.map((alias, i) => (
        <span key={i} className="lg:block  ">
          {alias}{" "}
        </span>
      )),
    },
  ];

  return (
    <section className=" flex flex-col w-full lg:w-1/5 ">
      <div className="lg:w-full max-w-[250px]  bg-red-700   lg:block flex justify-center mx-auto   rounded-lg overflow-hidden    ">
        <ImgCard
          alt={`Photo de ${data.name} `}
          getImageFn={getBigProfilImage}
          imageNotFound={getNotFoundImage(data.gender)}
          imageUrl={data.profile_path}
        />
      </div>
      <div>
        {window.innerWidth < 992 && (
          <TitleDetail
            title={data.name}
            mediaType="person"
            id={data.id.toString()}
          />
        )}
        <Subtitle text="Informations personnelles" />
        <div className="lg:flex grid   grid-cols-2  flex-col gap-4">
          {subInformationsData.map(({ title, information }, i) => {
            if (information?.length)
              return (
                <SubInformation
                  key={i}
                  title={title}
                  information={information}
                />
              );
          })}
        </div>
      </div>
    </section>
  );
}
