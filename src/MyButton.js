// return <div>{content}</div>;

function MyButton({ user }) {
  function handleClick() {
    alert(user.name);
  }
  // const user = { name: "bob" };
  let content;
  if (user.name == "bob") {
    content = <h1>I am Bob</h1>;
  } else {
    content = <h1>I am not Bob</h1>;
  }
  return <button onClick={handleClick}>{content}</button>;
}

export default MyButton;
