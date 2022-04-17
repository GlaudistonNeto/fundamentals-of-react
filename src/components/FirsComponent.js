// style file

import MyComponent from "./MyComponent";

const FirstComponent = () => {
  /*
    Multi line
      comment
  */
  return (
    <div className="myClass">
      {/* Some comment */}
      <h2>First Component</h2>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
