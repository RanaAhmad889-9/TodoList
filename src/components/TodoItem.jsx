function TodoItem({ name, date ,ondel,index }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=>ondel(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
