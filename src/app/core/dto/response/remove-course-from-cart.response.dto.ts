import { CoursePriceCurrencies } from "../../types";


interface RemoveCourseFromCartCourseResponseDTO {
	id: string;
	title: string;
	description: string;
	category: string;
	image: string;
	currency: CoursePriceCurrencies;
	value: number;
}

interface RemoveCourseFromCartResponseDTO {
	id: string;
	courses: RemoveCourseFromCartCourseResponseDTO[];
	currency: CoursePriceCurrencies;
	totalValue: number;
	tax: number;
}

export {
	RemoveCourseFromCartResponseDTO
};