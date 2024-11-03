interface ResetPasswordRequestDTO {
  email: string;
  verificationCode: string;
  password: string;
}

export { ResetPasswordRequestDTO };
