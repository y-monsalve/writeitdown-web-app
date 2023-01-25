function CreatePostForm() {
  return (
    <div className="submit-form">
      <h2>Write something down in LIST NAME...</h2>
      <form>
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          <textarea type="text" placeholder="write something here" />
        </label>
        <button>Post</button>
      </form>
    </div>
  );
}
export default CreatePostForm;
