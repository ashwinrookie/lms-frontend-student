
enum ErrorCodes {
	clientError = "CLIENT_ERROR",
	unauthorized = "UNAUTHORIZED",
	paymentRequired = "PAYMENT_REQUIRED",
	forbidden = "FORBIDDEN",
	notFound = "NOT_FOUND",
	conflict = "CONFLICT",
	tooManyRequests = "TOO_MANY_REQUESTS",
	invalidInput = "INV_INPUT",
	noUseCase = "NO_USE_CASE",
	invalidCredentials = "INVALID_CREDENTIALS",
	invalidPassword = "INV_PASSWORD",
	invalidRefreshToken = "INVALID_REFRESH_TOKEN",
	internalError = "INTERNAL_ERROR",
	studentEmailRequired = "STUDENT_EMAIL_REQUIRED",
	studentFirstNameRequired = "STUDENT_FIRST_NAME_REQUIRED",
	studentLastNameRequired = "STUDENT_LAST_NAME_REQUIRED",
	studentPasswordRequired = "STUDENT_PASSWORD_REQUIRED",
	studentNotFound = "STUDENT_NOT_FOUND",
	studentAlreadyExists = "STUDENT_ALREADY_EXISTS",
	studentPasswordNotExists = "STUDENT_PASSWORD_NOT_EXISTS",
	studentMaySignupWithGmail = "STUDENT_MAY_SIGNUP_WITH_GMAIL",
	googleAuthCodeRequired = "GOOGLE_AUTH_CODE_REQUIRED",
	googleRedirectUriRequired = "GOOGLE_REDIRECT_URI_REQUIRED",
	studentForgotPasswordEntryDoesNotExist = "STUDENT_FORGOT_PASSWORD_ENTRY_DOES_NOT_EXIST",
	studentForgotPasswordVerificationCodeDoesNotMatch = "STUDENT_FORGOT_PASSWORD_VERIFICATION_CODE_DOES_NOT_MATCH",
	studentSignupMethodDoesNotMatch = "STUDENT_SIGNUP_METHOD_DOES_NOT_MATCH",
	invalidAuthorizationToken = "INVALID_AUTHORIZATION_TOKEN",
	studentProfilePictureMimeTypeRequired = "STUDENT_PROFILE_PICTURE_MIME_TYPE_REQUIRED",
	refreshTokenNotFound = "REFRESH_TOKEN_NOT_FOUND",
	invalidUserTypeInToken = "INVALID_USER_TYPE_IN_TOKEN",
	refreshTokenRequired = "REFRESH_TOKEN_REQUIRED"
}

export {
	ErrorCodes
};