import { SubInformation } from "../../components/MediaDetail";
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
      information: `${data.birthday ? formatDate(data.birthday) : ""} ${
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
        <span key={i} className="block">
          {alias}{" "}
        </span>
      )),
    },
  ];

  return (
    <section className=" flex flex-col w-1/5 ">
      <div className="w-full rounded-lg overflow-hidden    ">
        <ImgCard
          alt={`Photo de ${data.name} `}
          getImageFn={getBigProfilImage}
          imageNotFound={getNotFoundImage(data.gender)}
          imageUrl={data.profile_path}
        />
      </div>
      <div>
        <Subtitle text="Informations personnelles" />
        <div className="flex flex-col gap-4">
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
