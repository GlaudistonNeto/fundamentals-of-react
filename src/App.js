import Challenge from './components/Challenge';
import Events from './components/Events';

//components
import FirstComponent from './components/FirsComponent'
import TemplateExpressions from './components/TemplateExpresions'

function App() {
  return (
    <div className="App">
      <h1>ReactJS Fundamentals</h1>
      <div>
        <FirstComponent />
        <TemplateExpressions />
        <Events />
      </div>
      <div>
        <Challenge />
      </div>
    </div>
  );
}

export default App;
