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

export const validateUserlogin = (object) => {
  return userScheme.partial().safeParse(object);
};
export const validateUserSignin = (object) => {
  return userScheme.safeParse(object);
};
