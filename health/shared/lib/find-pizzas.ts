import { prisma } from '@/prisma/prisma-client';

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findPizzas = async (params: GetSearchParams) => {
  // Убедитесь, что вы ожидаете searchParams, если это Promise
  // Убедитесь, что вы ожидаете searchParams, если это Promise
  const searchParams = await params;

  // Проверка и преобразование значений
  const minPrice = Number(searchParams.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(searchParams.priceTo) || DEFAULT_MAX_PRICE;
  
  const sizes = searchParams.sizes?.split(',').map(Number);
  const pizzaTypes = searchParams.pizzaTypes?.split(',').map(Number);
  const ingredientsIdArr = searchParams.ingredients?.split(',').map(Number);



  const categories =  prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: 'desc',
        },
        where: {
          ingredients: ingredientsIdArr
            ? {
                some: {
                  id: {
                    in: ingredientsIdArr,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              size: {
                in: sizes,
              },
              pizzaType: {
                in: pizzaTypes,
              },
              price: {
                gte: minPrice, // >=
                lte: maxPrice, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: 'asc',
            },
          },
        },
      },
    },
  });

  return categories;
};
