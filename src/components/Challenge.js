const Challenge = () => {
  const num1 = 5;

  const num2 = 8;

  function handleSum() {
    const sum = num1 + num2;
    return console.log(sum);
  }

  return (
    <div>
        <button onClick={handleSum}>Sum the numbers</button>
      <div>                
        { num1 }, { num2 }
      </div>
    </div>
  );
}

export default Challenge;
