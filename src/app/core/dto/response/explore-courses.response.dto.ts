import {
  CourseLanguages,
  CoursePriceCurrencies,
  CourseStatuses,
  CourseSubtitles,
} from '../../types';

interface ExploreCoursesCreatorResponseDTO {
  id: string;
  profilePicture: string | null;
  designation: string | null;
  firstName: string;
  lastName: string;
}

interface ExploreCoursesPriceResponseDTO {
  currency: CoursePriceCurrencies;
  value: number;
}

interface ExploreCoursesSectionLectureResponseDTO {
  thumbnail: string | null;
  description: string;
  duration: number;
  id: string;
  order: number;
  title: string;
}

interface ExploreCoursesSectionResponseDTO {
  lectures: ExploreCoursesSectionLectureResponseDTO[];
  id: string;
  lecturesCount: number;
  lecturesDuration: number;
  order: number;
  title: string;
}

interface ExploreCoursesResponseDTO {
  rating: null;
  creators: ExploreCoursesCreatorResponseDTO[];
  languages: CourseLanguages[];
  subtitles: CourseSubtitles[];
  materialsAndOffers: string[];
  price: ExploreCoursesPriceResponseDTO;
  sections: ExploreCoursesSectionResponseDTO[];
  category: string;
  description: string;
  id: string;
  image: string;
  lastUpdatedOn: string;
  status: CourseStatuses;
  title: string;
  totalDuration: number;
  totalSectionsCount: number;
  totalLecturesCount: number;
  totalStudents: number;
}

export {
  CourseLanguages,
  CourseSubtitles,
  CoursePriceCurrencies,
  CourseStatuses,
  ExploreCoursesResponseDTO,
};
