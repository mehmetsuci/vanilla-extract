import { atoms } from './styles.css';
import testNodes from '../test-nodes.json';

function render() {
  document.body.innerHTML = `
  <div id="${testNodes.root}" class="${atoms({
    display: 'block',
    paddingTop: {
      mobile: 'small',
      desktop: 'medium',
    },
  })}"> 
    Sprinkles
  </div>
`;
}

render();
