import { Data, data } from "./data";
import Card from "./components/Card";
import ProductsSlider from "./productsSlider/ProductsSlider";

export const Products = () => {
  return (
    <section id="products" className="min-w-full mt-14">
      <h1 className="w-64 min-w-full font-semibold text-[40px] text-center mb-12">
        Our Products
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0">
        {data.map((item: Data) => {
          return <Card key={item.name} {...item} />;
        })}
      </div>
    </section>
  );
};
