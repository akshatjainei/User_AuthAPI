import {object , TypeOf , string} from 'zod'

export const createUserSchema = object({
    body : object({
        firstName : string({
            required_error : "first Name required"
        }),
        lastName : string({
            required_error : "last Name required"
        }),
        password : string({
            required_error : "password required"
        }).min(6,"password too short"),
        passwordConfirmation : string({
            required_error : "password confirmation required"
        }),
        email : string({
            required_error : "first Name required"
        }).email("Not a valid email"),
    }).refine((data) => data.password === data.passwordConfirmation,{
        message : "passwords do not match",
        path:['passwordConfirmation']
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];