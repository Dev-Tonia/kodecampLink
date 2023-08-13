const List = (props) => {
  const text = props.text;
  return (
    <div className="list">
      <p>{text}</p>
    </div>
  );
};

export default List;
