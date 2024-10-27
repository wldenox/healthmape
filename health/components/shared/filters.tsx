import React from 'react';

import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui/input';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';
import { Title } from './title';
import { RangeSlider } from '../ui/range-slider';


interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Время от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="time" placeholder="0" min={0} max={30000} defaultValue={0} />
          <Input type="time" min={100} max={30000} placeholder="30000" />
        </div>
        <p className="font-bold mb-3">Цена от и до:</p>
        <RangeSlider min={0} max={100} step={10} value={[0, 100]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Формат"
        limit={6}
        defaultItems={[
          {
            text: 'Терапевт',
            value: '1',
          },
          {
            text: 'Педиатр ',
            value: '2',
          },
          {
            text: 'Стоматолог',
            value: '3',
          },
          {
            text: 'Отоларинголог',
            value: '4',
          },
          {
            text: 'Офтальмолог',
            value: '5',
          },
          {
            text: 'Кардиолог',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Терапевт',
            value: '1',
          },
          {
            text: 'Педиатр ',
            value: '2',
          },
          {
            text: 'Стоматолог',
            value: '3',
          },
          {
            text: 'Отоларинголог',
            value: '4',
          },
          {
            text: 'Офтальмолог',
            value: '5',
          },
          {
            text: 'Кардиолог',
            value: '6',
          },
          {
            text: 'Гастроэнтеролог',
            value: '7',
          },
          {
            text: 'Акушер-гинеколог ',
            value: '8',
          },
          {
            text: 'Невролог',
            value: '9',
          },
          {
            text: 'Онколог',
            value: '10',
          },
          {
            text: 'Аллерголог',
            value: '11',
          },
          {
            text: 'Эндокринолог',
            value: '12',
          },
          {
            text: 'Инфекционист',
            value: '13',
          },
          {
            text: 'Психиатр',
            value: '14',
          },
          {
            text: 'Дерматолог',
            value: '15',
          },
        ]}
      />
    </div>
  );
};
