import z from "zod";

const userScheme = z.object({
  name: z.string({
    invalid_type_error: "name must be a string",
    required_error: "name is required",
  }),
  username: z.string({
    invalid_type_error: "username must be a string",
    required_error: "username is required",
  }),
  email: z.string().email({
    invalid_type_error: "email must be a valid email address",
  }),
  password: z.string({
    invalid_type_error: "name must be a string",
    required_error: "password is required",
  }),
  phone: z.string({
    nvalid_type_error: "phone must be a number",
    required_error: "phone is required",
  }),
  rol: z.number().int().default(2),
  verifyCode: z.string(),
});

const sendMessageScheme = z.object({
  name: z.string({
    invalid_type_error: "name must be a string",
    required_error: "name is required",
  }),
  surename: z.string({
    invalid_type_error: "surename must be a string",
    required_error: "surename is required",
  }),
  email: z.string().email({
    invalid_type_error: "email must be a valid email address",
  }),
  companyName: z.string({
    invalid_type_error: "companyName must be a string",
    required_error: "companyName is required",
  }),
  phone: z.string({
    nvalid_type_error: "phone must be a number",
    required_error: "phone is required",
  }),
  message: z.string({
    nvalid_type_error: "phone must be a number",
    required_error: "phone is required",
  }),
  check: z.string({
    nvalid_type_error: "check must be a number",
    required_error: "check is required",
  }),
});

export const validateUserlogin = (object) => {
  return userScheme.partial().safeParse(object);
};
export const validateUserSignin = (object) => {
  return userScheme.safeParse(object);
};
export const validateDataMessage = (object) => {
  return sendMessageScheme.safeParse(object);
};
