import ImgCard from "./ImgCard";
import { SubInformation } from "../MediaDetail";
import LinkPage from "../Router/LinkPage";
type Props = {
  imageUrl: string;
  getImageFn: (value: string) => string;
  alt: string;
  name: string;
  role: string;
  imageNotFound: string;
  id: number;
};

function CardRole({
  imageUrl,
  getImageFn,
  alt,
  name,
  role,
  imageNotFound,
  id,
}: Props) {
  return (
    <li className="  flex gap-4 items-center  ">
      {/* IMAGE */}
      <LinkPage titleMedia={name} mediaType="person" id={id.toString()}>
        <div className="overflow-hidden rounded-lg h-16 w-16  ">
          <ImgCard
            imageNotFound={imageNotFound}
            imageUrl={imageUrl}
            getImageFn={getImageFn}
            alt={alt}
          />
        </div>
      </LinkPage>
      {/* TExt */}
      <div className="flex items-center ">
        <LinkPage mediaType="person" id={id.toString()}>
          <SubInformation title={name} information={role} />
        </LinkPage>
      </div>
    </li>
  );
}

export default CardRole;
