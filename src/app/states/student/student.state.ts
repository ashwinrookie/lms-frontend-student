interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string | null;
}

interface StudentState {
  student: Student | null;
  error: Error | null;
  loaded: boolean;
}

const initialStudentState: StudentState = {
  student: null,
  error: null,
  loaded: false,
};

export { Student, StudentState, initialStudentState };
