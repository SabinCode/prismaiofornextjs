"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { deleteUser } from "../actions/user-delete"

const DeleteUser = () => {
    const[userId, setUserId] = useState<number | null>(null)  

    const[deleteUserResponse, deleteUserAction] = useFormState(deleteUser, null)

    const { pending } = useFormStatus()

    const handleDelete = async (id: number) => {
        const formData = new FormData()
        formData.append("id", id.toString())
        setUserId(id)
        await deleteUserAction(formData)
    }
    return (
        <div>
            <input
            type="number"
            placeholder="User Id to Delete"
            onChange={(e) => {
                setUserId(Number(e.target.value))
            }} />

            <button
            onClick={() => {
                handleDelete(userId!)
            }}>
                Delete
            </button>

            <p className="text-red-500">{deleteUserResponse?.message}</p> 
        </div>
    )
}

export default DeleteUser