
const Comments = async ({promise}) => {
    const comments = await promise
    return (
        <div className="mt-6">
        <h1>Comments</h1>
        <ul>
          {comments.map(comment => <li className="mb-2" key={comment.id}>
            <span className="text-red-500 text-xl font-bold"> {comment.name}</span>
            <br />
            <span>{comment.body}</span></li>)}
        </ul>
      </div>
    );
};

export default Comments;