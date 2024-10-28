import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';

interface Props {
  title: string;
  items: any[];
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className }) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={i}
            name="Dr.Tomas Anderson"
            imageUrl="https://cdn-eu.icons8.com/mosPhBGSF0y19HSrcPVE3Q/P0IvjFH-N0qblOusGtYW_g/group_2_objects.png"
            price={20}
            count={i % 2}
          />
        ))}
      </div>
    </div>
  );
};
