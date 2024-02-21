import { ProductData, productData } from '@/components/data/apexpoint/productData';
import Section from '@/components/ui/Section';
import Details from './components/Details/Details';
import Card from '@/components/ui/Card';
import Header from '@/components/ui/Header';

export const Products = () => {
  return (
    <Section id="products" className="flex flex-col gap-4 min-[425px]:gap-10 ">
      <Header>Our Products</Header>
      <div className="w-full flex flex-col  items-center  justify-center md:flex-col gap-y-10  ">
        {productData.map((item: ProductData) => {
          return (
            <Card
              className={`h-full w-full max-w-[1000px] flex ${
                item.name === 'chlorelief' ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'
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
