import { AboutData } from "@/components/data/apexpoint/aboutData";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Header from "./Header";
import Description from "./Description";

const Cards: React.FC = () => {
  const mappedData = AboutData.map((data) => (
    <Card
      className="w-full flex flex-col items-center justify-start gap-2 max-w-[325px] p-6 md:p-4 lg:p-6 min-h-[250px] md:min-h-0 shadow-md rounded-md"
      key={data.header}
    >
      <Icon
        className="h-8 w-8 min-[375px]:h-10 min-[375px]:w-10 min-[425px]:w-12 min-[425px]:h-12 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
        src={data.icon}
        alt={data.header}
      />

      <Header text={data.header} />
      <Description text={data.info} />
    </Card>
  ));

  return <>{mappedData}</>;
};

export default Cards;
