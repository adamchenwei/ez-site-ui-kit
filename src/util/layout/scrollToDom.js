import ReactDOM from 'react-dom';

export default function scrollToDom(dom, delayMs) {
  const delay = delayMs || 500;
  if (!dom & window) {
    window.scrollTo(0, 0);
  } else {
    setTimeout(() => {
      ReactDOM.findDOMNode(dom).scrollIntoView({behavior: 'smooth'});
    }, delay);
  }

};
