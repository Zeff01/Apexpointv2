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
      className="flex flex-col gap-4 min-[425px]:gap-10 pt-4  "
    >
      <Header>Our Products</Header>
      <div className="w-full flex flex-col min-[425px]:items-center md:items-start justify-center md:flex-col gap-y-10  ">
        {productData.map((item: ProductData) => {
          return (
            <Card
              className={`h-full w-full  flex ${
                item.name === "chlorelief"
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              } gap-6 mb-10`}
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
