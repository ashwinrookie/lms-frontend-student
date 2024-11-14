import { CoursePriceCurrencies } from "../../types";


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