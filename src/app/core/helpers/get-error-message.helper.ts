import { ErrorCodes } from '../errors';

function getErrorMessage(code: ErrorCodes) {
  switch (code) {
    case ErrorCodes.clientError: {
      return 'Bad Request';
    }

    case ErrorCodes.forbidden: {
      return 'Forbidden Request';
    }

    case ErrorCodes.conflict: {
      return 'Input Conflict';
    }

    case ErrorCodes.googleAuthCodeRequired: {
      return 'Google auth code is required';
    }

    case ErrorCodes.googleRedirectUriRequired: {
      return 'Google redirect uri is required';
    }

    case ErrorCodes.internalError: {
      return 'Something went wrong, please try again';
    }

    case ErrorCodes.invalidAuthorizationToken: {
      return 'Authorization token is invalid';
    }

    case ErrorCodes.invalidCredentials: {
      return 'Invalid Credentials';
    }

    case ErrorCodes.invalidInput: {
      return 'Invalid Input';
    }

    case ErrorCodes.invalidPassword: {
      return 'Invalid Credentials';
    }

    case ErrorCodes.invalidRefreshToken: {
      return 'Refresh token is invalid';
    }

    case ErrorCodes.invalidUserTypeInToken: {
      return 'Invalid user type in the token';
    }

    case ErrorCodes.noUseCase: {
      return 'No use-case for the request';
    }

    case ErrorCodes.notFound: {
      return 'Not Found';
    }

    case ErrorCodes.paymentRequired: {
      return 'Payment Required';
    }

    case ErrorCodes.refreshTokenNotFound: {
      return 'Refresh token not found';
    }

    case ErrorCodes.refreshTokenRequired: {
      return 'Refresh token is required';
    }

    case ErrorCodes.studentAlreadyExists: {
      return 'Student already exists';
    }

    case ErrorCodes.studentEmailRequired: {
      return 'Student email is required';
    }

    case ErrorCodes.studentFirstNameRequired: {
      return 'Student first name is required';
    }

    case ErrorCodes.studentForgotPasswordEntryDoesNotExist: {
      return 'Student did not request for the forgot password';
    }

    case ErrorCodes.studentForgotPasswordVerificationCodeDoesNotMatch: {
      return 'Verification code is invalid';
    }

    case ErrorCodes.studentLastNameRequired: {
      return 'Student last name is required';
    }

    case ErrorCodes.studentMaySignupWithGmail: {
      return 'You may have signed up using gmail';
    }

    case ErrorCodes.studentNotFound: {
      return 'Student not found';
    }

    case ErrorCodes.studentPasswordNotExists: {
      return 'Student password does not exist';
    }

    case ErrorCodes.studentPasswordRequired: {
      return 'Student password is required';
    }

    case ErrorCodes.studentProfilePictureMimeTypeRequired: {
      return 'Mime type is required';
    }

    case ErrorCodes.studentSignupMethodDoesNotMatch: {
      return 'Signup method does not match';
    }

    case ErrorCodes.tooManyRequests: {
      return 'Too many requests';
    }

    case ErrorCodes.unauthorized: {
      return 'Unauthorized';
    }

    default: {
      return 'Something went wrong, please try again';
    }
  }
}

export { getErrorMessage };
