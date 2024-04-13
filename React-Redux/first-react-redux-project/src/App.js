
//import {counting} from 'js-component-new';
import {colors} from './components/counting_ui';
import {booklist} from './components/tailwindcss.config'
var colorvalu = colors.pink = '#994';
function App() {
  return (
    
    <div>
      
      <h2 style={{color: colorvalu}}>React Redux Project {booklist.booklist}</h2>
    </div>
  );
}

export default App;
