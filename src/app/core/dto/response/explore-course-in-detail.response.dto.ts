import { CourseLanguages, CoursePriceCurrencies, CourseStatuses, CourseSubtitles } from "../../types";


interface ExploreCourseInDetailCreatorResponseDTO {
  id: string;
  profilePicture: string | null;
  designation: string | null;
  firstName: string;
  lastName: string;
}

interface ExploreCourseInDetailPriceResponseDTO {
  currency: CoursePriceCurrencies;
  value: number;
}

interface ExploreCourseInDetailSectionLectureResponseDTO {
  thumbnail: string | null;
  description: string;
  duration: number;
  id: string;
  order: number;
  title: string;
}

interface ExploreCourseInDetailSectionResponseDTO {
  lectures: ExploreCourseInDetailSectionLectureResponseDTO[];
  id: string;
  lecturesCount: number;
  lecturesDuration: number;
  order: number;
  title: string;
}

interface ExploreCourseInDetailResponseDTO {
  rating: null;
  creators: ExploreCourseInDetailCreatorResponseDTO[];
  languages: CourseLanguages[];
  subtitles: CourseSubtitles[];
  materialsAndOffers: string[];
  price: ExploreCourseInDetailPriceResponseDTO;
  sections: ExploreCourseInDetailSectionResponseDTO[];
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
  isStudentEnrolledForCourse: boolean;
}

export {
  ExploreCourseInDetailResponseDTO,
};
