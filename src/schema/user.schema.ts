import {object , TypeOf , string} from 'zod'

export const createUserSchema = object({
    body: object({
      firstName: string({
        required_error: "First name is required",
      }),
      lastName: string({
        required_error: "Last name is required",
      }),
      password: string({
        required_error: "Password is required",
      }).min(6, "Password is too short - should be min 6 chars"),
      passwordConfirmation: string({
        required_error: "Password confirmation is required",
      }),
      email: string({
        required_error: "Email is required",
      }),
    }).refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    }),
  });

  export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];