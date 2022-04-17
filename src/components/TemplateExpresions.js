const TemplateExpressions = () => {
  const name = "My Name"

  const data = {
    age: 36,
    job: 'programmer'
  }
  return (
    <div>
      <h3>Hello, { name }, how's it going there?</h3>
      <h5>{ data.age } is your age, right?</h5>
      <h5>You are currently a { data.job }, isn't it?</h5>
    </div>
  );
};

export default TemplateExpressions;
