import { CoursePriceCurrencies } from "./explore-courses.response.dto";


interface AddCourseToCartCourseResponseDTO {
	id: string;
	title: string;
	description: string;
	category: string;
	image: string;
	currency: CoursePriceCurrencies;
	value: number;
}

interface AddCourseToCartResponseDTO {
	id: string;
	courses: AddCourseToCartCourseResponseDTO[];
	currency: CoursePriceCurrencies;
	totalValue: number;
	tax: number;
}

export {
	AddCourseToCartResponseDTO
};