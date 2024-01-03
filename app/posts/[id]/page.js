import Comments from "@/app/components/Comments";
import getPostComments from "@/lib/getPostComments";
import getPost from "@/lib/getpost";
import { Suspense } from "react";

export const generateMetadata = async ({params}) => {
  const { id } = params;
  const post = await getPost(id);
   return {
    title: post.title,
    description: post.body
  }
}

const PostPage = async ({ params }) => {
  const { id } = params;
  const postPromise = getPost(id);
  const commentPromise = getPostComments(id)

  // const [post, comments] = await Promise.all([postPromise, commentPromise])

  const post = await postPromise
  return (
    <div className="mt-6">
      <h1 className="mt-5 text-3xl font-bold">{post.title}</h1>
      <p className="mt-3 text-lg">{post.body}</p>
      <hr />

      <Suspense fallback="<h1>comments are loading... <h1>">
        <Comments promise={commentPromise} />
      </Suspense>
    </div>
  );
};

export default PostPage;
