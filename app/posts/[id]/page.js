import getPost from "@/lib/getpost";

const PostPage = async ({ params }) => {
  const { id } = params;

  const post = await getPost(id);

  return (
    <div className="mt-6">
      <h1 className="mt-5 text-3xl font-bold">{post.title}</h1>
      <p className="mt-3 text-lg">{post.body}</p>
    </div>
  );
};

export default PostPage;
