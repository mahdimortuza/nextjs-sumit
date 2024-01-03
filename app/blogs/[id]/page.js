import { notFound } from "next/navigation";

const BlogPage = ({params}) => {
    const {id} = params
    if(id === "3"){
        notFound()
    }
    return (
        <div className="mt-6">
            the blog id is {id}
        </div>
    );
};

export default BlogPage;