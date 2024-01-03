import Link from "next/link";

const BlogPage = () => {
    const blogs = [
        {
            id:1,
            title: "blog 1",
            description: "blog 1 description."
        },
        {
            id:2,

            title: "blog 2",
            description: "blog 2 description."
        }
    ]
    return (
        <main className="mt-10">
            this is blog page page
            <ul>
                {blogs.map(blog => <li className="mb-5" key={blog.title}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>)}
            </ul>
        </main>
    );
};

export default BlogPage;