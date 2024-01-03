import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const AllPosts = async() => {
    const posts = await getAllPosts()
    return (
        <div className="mt-5 ">
            <h1 className="mt-5 text-xl font-bold">All Posts</h1>

<ul>
{posts.map(post=> <li key={post.id}>
    <Link href={`/posts/${post.id}`}>{post.title}</Link>
</li>)}
    </ul>        
    </div>
    );
};

export default AllPosts;