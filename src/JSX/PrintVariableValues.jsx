const PrintVariableValues = () => {
  const str = "Hello, World";
  const flag = true;
  function sayHi() {
    return "Hello, Hi";
  }
  return (
    <div>
      {str}
      <div>{` Falg value = ${flag}`}</div>
      {console.log("Hello, Console")}
      {sayHi()}
    </div>
  );
};

export default PrintVariableValues;
