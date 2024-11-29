'use server'
import { cookies } from 'next/headers'
import { signin, signup } from '@/utils/authTools'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'

const authSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const registerUser = async (prevState: any, formData: FormData) => {
    const data = authSchema.parse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    try {
        const nextjsCookies = cookies()
        const { token } = await signup(data)
        nextjsCookies.set(COOKIE_NAME, token)
    } catch (e) {
        console.error(e)
        return { message: 'Failed to sign up' }
    }

    redirect('/dashboard')
}

export const signinUser = async (prevState: any, formData: FormData) => {
    const data = authSchema.parse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    try {
        const nextjsCookies = cookies()
        const { token } = await signin(data)
        nextjsCookies.set(COOKIE_NAME, token)
    } catch (e) {
        console.error(e)
        return { message: 'Failed to sign in' }
    }

    redirect('/dashboard')
}