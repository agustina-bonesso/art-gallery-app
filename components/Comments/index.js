export default function Comments({ comments }) {
    
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment}>
            <p>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
