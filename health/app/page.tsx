// pages/index.js
import React from 'react';
import DoctorCard from '../components/DoctorCard.js';
import doctorsData from '../data/doctorsData.js';
import { Button } from '@/components/ui/button';
import { Container , Title } from "@/components/shared";
import { Categories } from '@/components/shared/categories';
import { SortPopup } from '@/components/shared/sort-popup';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { Pagination } from '@/components/shared/pagination';
import { Filters } from '@/components/shared/filters';

export default function Home() {
  return <>
  <main> 
  <Container className='mt-10'>
    <Title text='Все Врачи' size="lg" className = "font-extrabold"/>
  </Container>
  <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopup />
        </Container>
  </div>
  <Container className="grid grid-cols-6 gap-2 my-10">
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn-eu.icons8.com/mosPhBGSF0y19HSrcPVE3Q/65Jc_G1lpEGbrrR_f5nekg/Frame.png"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn-eu.icons8.com/mosPhBGSF0y19HSrcPVE3Q/65Jc_G1lpEGbrrR_f5nekg/Frame.png"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640"
        />
        <img
          className="rounded-md"
          height={250}
          width={200}
          src="https://cdn-eu.icons8.com/mosPhBGSF0y19HSrcPVE3Q/65Jc_G1lpEGbrrR_f5nekg/Frame.png"
        />
      </Container>

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Врачи" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Устройства" items={[1, 2, 3, 4, 5]} />
            </div>

            <div className="flex items-center gap-6 mt-12">
              <Pagination pageCount={3} />
              <span className="text-sm text-gray-400">5 из 65</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  </>
}
