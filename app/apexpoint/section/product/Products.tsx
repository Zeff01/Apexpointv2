import { Data, data } from "./data";
import Card from "./components/Card";

export const Products = () => {
  return (
    <section className="min-w-full grid gap-4 place-items-center p-12 ">
      <h1 className="w-64 min-w-full font-semibold text-[40px] text-center mb-12">
        Our Products
      </h1>
      {data.map((item: Data) => {
        return <Card key={item.name} {...item} />;
      })}
    </section>
  );
};
