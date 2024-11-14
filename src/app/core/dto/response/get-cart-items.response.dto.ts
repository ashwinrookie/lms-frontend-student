import { CoursePriceCurrencies } from "../../types";

interface GetCartItemsCourseResponseDTO {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  currency: CoursePriceCurrencies;
  value: number;
  creators: string[];
  totalDuration: number;
  totalLecturesCount: number;
}

interface GetCartItemsResponseDTO {
  id: string;
  courses: GetCartItemsCourseResponseDTO[];
  currency: CoursePriceCurrencies;
  totalValue: number;
  tax: number;
}

export { GetCartItemsResponseDTO };
