import prisma from "@/db"
import Link from "next/link"
import CreateUser from "./create-user"

const Users = async () => {
    // const posts = await prisma.post.findMany()
    const users = await prisma.user.findMany({
        include: {
            posts: true
        }
    })

    const userCount = await prisma.user.count()

    console.log({ users }) //post server ma as a array aaucha

    return (
        <>

            <h1 className="text-3xl font-bold ">Users</h1>

            {/* {posts?.map((post) => (
            <div key={post.id}>
                <h2>{post.tittle}</h2>
                <p>{post.body}</p>
            </div>
            
        ))} */}

            Total Users: {userCount}

            {users?.map((user) => (
                <div key={user.id}>

                    <Link href={`/users/${user.id}/posts`}>
                        <h2> Title: {user.name}</h2>
                    </Link>

                    <p>Email: {user.email}</p>

                    <p>Posts:</p>
                    {user.posts?.map((post) => (
                        <div key={post.id}>
                            <h3>{post.tittle}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))}
                    <br />

                </div>

            ))}

            <CreateUser />

        </>
    )
}

export default Users

//harek users ko post teskai tala dekhaunalai. single user ma postlai loop lagako.
{/* <p>Posts:</p>
{user.posts?.map((post) => (
    <div key={post.id}>
        <h3>{post.tittle}</h3>
        <p>{post.body}</p>
    </div> */}


//database bata count nikalda length use nagari database query bata count nikalem.

//server action to createUser function
//re-usable component CreateUser as a client component banayera yeha import garera use gareko.