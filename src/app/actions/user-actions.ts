
"use server"

import prisma from "@/db"
import { revalidatePath } from "next/cache"

export async function createUser(initialState: any, formData: FormData) {
    const name = formData.get("name")
    const  email = formData.get("email")
    try {
    await prisma.user.create({
        data: {
            name: name as string,
            email: email as string,
        }
    })
    revalidatePath("/users")
    return{message: "User created" , success: true}
    } catch (error) {
        console.log(error)
        return{message: "User not created" , success: false}
    }

}

    //revalidatePath("/users") le auto users count update garera user banauna sath dekhaucha.
    //initialState ma type any lekhera vayena String lekhera matra vayo.

    //updatedAt : new Date() //yo updatedAt narakhda type error aayo??
    //yo error updatedAt lai @updatedAt nagarda required hunroicha so error aayo.