const Events = () => {

  function handleMyEvent(e) {
    console.log(e);
    console.log("CICK!");
  }

  const rederSomething = (x) => {
    if (x) {
      return <h1>Reder this.</h1>;
    } else {     
      return <h1>Reder this other.</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>A Button</button>
      </div>
      <div>
        <button onClick={() => console.log('CLICKED!')}>Other Button</button>
      </div>
      <div>
        <button onClick={() => {
          if (true) {
          console.log("It shouldn't exist")}
          }}>Click Me</button>
      </div>
      { rederSomething(true) }
      { rederSomething(false) }
    </div>
  );
};

export default Events;
