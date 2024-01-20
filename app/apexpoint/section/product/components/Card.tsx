import { Data } from "../data";
import Info from "../content/Info";
import ImageInfo from "../content/ImageInfo";

const Card = ({ name, title, description, img, logo, url, benefits }: Data) => {
  return (
    <div
      key={name}
      className="h-full w-full md:w-1/2 flex flex-col-reverse items-center gap-14"
    >
      <Info
        name={name}
        title={title}
        description={description}
        img={img}
        url={url}
        benefits={benefits}
      />
      <ImageInfo name={name} logo={logo} />
    </div>
  );
};

export default Card;
