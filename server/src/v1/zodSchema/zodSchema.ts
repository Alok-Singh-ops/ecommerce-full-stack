import z from "zod"



export const signInSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1)
})

export const signUpSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string()
})





export const addProductSchema = z.object({
    title:  z.string(),
    description: z.string().optional(),
    price: z.number(),
    imgUrl: z.string().optional()

})