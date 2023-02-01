import { Button } from "bootstrap";

function Content(props) {
  const deleteTodo = () => {
    props.completed(props.id);
  };
  return (
    <div>
      <input type={"checkbox"} onClick={deleteTodo}></input>
      <label>{props.text}</label>
    </div>
  );
}

export default Content;
