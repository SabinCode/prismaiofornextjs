"use client"

import { useFormState, useFormStatus } from "react-dom"
import { createUser } from "../actions/user-actions"
import { ElementRef, useRef } from "react"

const CreateUser = () => {
    const [createUserResponse, createUserAction] = useFormState(createUser, null)

    const formRef = useRef<ElementRef<"form">>(null)

    const { pending } = useFormStatus()

    if (formRef.current && createUserResponse?.success) {
        formRef.current.reset()
    }
    return (
        <>

            <form ref={formRef} className="flex gap-2 text-white border-r-amber-500 " action={createUserAction}>
                <input className="bg-fuchsia-800" type="text" name="name" placeholder="Name" />
                <input className="bg-fuchsia-800" type="email" name="email" placeholder="Email" />
                <button className="bg-amber-500 " type="submit">Submit</button>

                <p className="text-red-500"> {createUserResponse?.message}</p>
            </form>

        </>
    )
}


export default CreateUser

//hook use garnalai client component banako
//useFormState hook ma const [state, action] huncha = useFormState(createUser, null)
//useFormState hook ma createUser use gareko vayera typeerror aayo. aba form ma type directly aaudaina
// createUser(initialState, formData: FormData) yesari type aaucha

// action={createUser}> hook usegarepaxi action={createUserAction}> garna paryo.

