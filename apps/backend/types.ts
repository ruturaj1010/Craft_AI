import {z} from 'zod';

export const signupSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(30)
})

export const signinSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(30)
})

export const CreateAvatarSchema = z.object({
    name: z.string().min(3).max(50),
    images: z.array(z.string())
})