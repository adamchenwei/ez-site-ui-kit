import ReactDOM from 'react-dom';
import getWindow from './../../util/get/getWindow';

export default function scrollToDom(dom, delayMs) {
  const delay = delayMs || 500;
  if (!dom & getWindow) {
    getWindow.scrollTo(0, 0);
  } else {
    setTimeout(() => {
      const node = ReactDOM.findDOMNode(dom);
      if (node) {
        node.scrollIntoView({behavior: 'smooth'});
      }
    }, delay);
  }

};
