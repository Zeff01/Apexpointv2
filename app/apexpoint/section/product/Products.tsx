import {
  ProductData,
  productData,
} from "@/app/components/data/apexpoint/productData";
import Section from "@/app/components/ui/Section";
import Details from "./components/Details/Details";
import Card from "@/app/components/ui/Card";
import Header from "@/app/components/ui/Header";

export const Products = () => {
  return (
    <Section
      id="products"
      className="flex flex-col gap-4 min-[425px]:gap-10 pt-[5%]"
    >
      <Header>Our Products</Header>
      <div className="w-full flex flex-col min-[425px]:items-center md:items-start justify-center md:flex-row gap-[6%]">
        {productData.map((item: ProductData) => {
          return (
            <Card
              className="h-full w-full min-[425px]:w-3/4 md:w-[45%] flex flex-col gap-6 mb-10"
              key={item.name}
            >
              <Details {...item} />
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
