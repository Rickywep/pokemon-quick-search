import { useState } from 'react';
import './scrollTop.scss';
import Pokeball from '../images/pokeball.svg';

export default function ScrollTop() {
  const [isHidden, setIsHidden] = useState(true);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const hide = document.documentElement.scrollTop < 500;
    setIsHidden(hide);
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <img
        src={Pokeball}
        alt="pokeball button"
        width="50"
        className={isHidden ? 'd-none' : ''}
        onClick={topFunction}
        id="btn-top"
        title="Go to top"
      />
    </div>
  );
}
