function CreateListForm() {
  return (
    <div className="submit-form">
      <h2>Create a list:</h2>
      <form>
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Description
          <input type="text" />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}
export default CreateListForm;
