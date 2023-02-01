import { Button } from "bootstrap";

function Content(props) {
  const deleteTodo = () => {
    props.completed(props.id);
  };
  return (
    <div onClick={deleteTodo}>
      <input type={"checkbox"}></input>
      <label>{props.text}</label>
    </div>
  );
}

export default Content;
