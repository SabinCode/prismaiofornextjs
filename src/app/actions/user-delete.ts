"use server"

import prisma from "@/db"
import { revalidatePath } from "next/cache"


export async function deleteUser(initialState: any, formData: FormData) {
    const userId = formData.get("id")
       
    try {
        await prisma.user.delete({
            where: { id: Number(userId) },
        })
        revalidatePath("/users")
        return { message: "User deleted", success: true }
    } catch (error) {
        console.log(error)
        return { message: "User not deleted", success: false }
    }
}