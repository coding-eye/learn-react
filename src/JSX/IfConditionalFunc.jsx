const IfConditionalFunc = () => {
  const temp = 32;
  if (temp < 35) {
    return <h1>Cold Temp</h1>;
  } else {
    return <h1>Hot Temp</h1>;
  }
};

export default IfConditionalFunc;
