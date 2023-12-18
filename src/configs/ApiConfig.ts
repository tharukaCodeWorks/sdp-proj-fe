const HOST = "http://localhost:8080";

export default HOST;

// Auth URL
export const LOGIN_API = `${HOST}/auth/sign-in`;
export const REGISTER_API = `${HOST}/auth/signup`;
export const VERIFY_EMAIL_API = `${HOST}/auth/email/verify`;
export const FORGOT_PASSWORD_API = `${HOST}/auth/password/forgot`;
export const PASSWORD_RESET_CODE_VERIFY_API = `${HOST}/auth/password/verify-code`;
export const RESET_PASSWORD_API = `${HOST}/auth/password/reset`;
export const RESEND_VERIFY_EMAIL_API = `${HOST}/user/resend-verification-email?email=`;

// Divisions & Departments
export const GET_ALL_DIVISIONS = `${HOST}/divisions/all`;
export const GET_ALL_DEPARTMENTS = `${HOST}/departments/all`;

// Complaint
export const CREATE_COMPLAINT_API = `${HOST}/complaint/create`;
