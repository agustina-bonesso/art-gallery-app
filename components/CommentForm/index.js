export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const pieceData = { slug: slug, ...data };
    console.log(pieceData);
    onSubmitComment(pieceData);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Comments</h2>
      <input
        aria-label="comment"
        type="text"
        placeholder="type your comment here..."
        name="comment"
      ></input>
    </form>
  );
}
