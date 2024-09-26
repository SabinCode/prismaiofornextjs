import prisma from "@/db"
import Link from "next/link"

const PostOfUser = async ({ params }: { params: { userId: string } }) => {

    const posts = await prisma.post.findMany({
        where: {
            userId: Number(params.userId)
        },
        skip: (2-1) * 2,
        take: 2,
    })

    return (
        <div>
            <h1>Posts</h1>
            {posts?.map((post) => (
                <div key={post.id}>

                    <h1>{post.tittle}</h1>
                    <p>Content: {post.body}</p> 
                    <br />
                </div>
            ))}
        </div>
    )
}

export default PostOfUser

//user id use garera post fetch garcha ani tyo post lai loop lagayera dekhaucha
//params bata aayepaxi string huncha. So teslai hamile number banauna paryo.
//userId = Number(params.userId)

//users/1/posts dekhuanalai , [userId] vitra yeuta posts folder banauna paryo.

//post ma pagination gareko skip 0, take 2. 2 ta matra post dekhaune vayo single load ma.