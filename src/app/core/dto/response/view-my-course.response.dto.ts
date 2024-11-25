import { CourseLanguages, CoursePriceCurrencies, CourseStatuses, CourseSubtitles } from "../../types";



interface ViewMyCoursePriceResponseDTO {
	currency: CoursePriceCurrencies;
	value: number;
}

interface ViewMyCourseCreatorResponseDTO {
	firstName: string;
	lastName: string;
	profilePicture: string | null;
	designation: string | null;
}

interface ViewMyCourseRatingResponseDTO {
	value: number;
	totalCount: number;
}

interface ViewMyCourseSectionLectureSubtitleResponseDTO {
	language: CourseSubtitles;
	url: string;
}

interface ViewMyCourseSectionLectureResponseDTO {
	id: string;
	title: string;
	description: string;
	duration: number;
	thumbnail: string | null;
	order: number;
	watchDuration: number;
}

interface ViewMyCourseSectionResponseDTO {
	id: string;
	title: string;
	lectures: ViewMyCourseSectionLectureResponseDTO[];
	lecturesCount: number;
	lecturesDuration: number;
	order: number;
}

interface ViewMyCourseLastViewedLectureResponseDTO {
	id: string;
	title: string;
	description: string;
	duration: number;
	thumbnail: string | null;
	order: number;
	watchDuration: number;
}

interface ViewMyCourseResponseDTO {
	id: string;
	status: CourseStatuses;
	title: string;
	description: string;
	category: string;
	rating: ViewMyCourseRatingResponseDTO | null;
	totalStudents: number;
	creators: ViewMyCourseCreatorResponseDTO[];
	lastUpdatedOn: Date;
	languages: CourseLanguages[];
	subtitles: CourseSubtitles[];
	materialsAndOffers: string[];
	price: ViewMyCoursePriceResponseDTO;
	image: string;
	sections: ViewMyCourseSectionResponseDTO[];
	totalSectionsCount: number;
	totalLecturesCount: number;
	totalDuration: number;
	lastViewedLecture: ViewMyCourseLastViewedLectureResponseDTO | null;
}


export {
	ViewMyCoursePriceResponseDTO,
	ViewMyCourseCreatorResponseDTO,
	ViewMyCourseRatingResponseDTO,
	ViewMyCourseSectionLectureSubtitleResponseDTO,
	ViewMyCourseSectionLectureResponseDTO,
	ViewMyCourseSectionResponseDTO,
	ViewMyCourseLastViewedLectureResponseDTO,
	ViewMyCourseResponseDTO
};