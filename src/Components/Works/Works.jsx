import style from './Works.module.css';
import MovieLogin from '../../images/Movie/MovieLogin.png';
import MovieHeader from '../../images/Movie/MovieHeader.png';
import MovieMain from '../../images/Movie/MovieMain.png';
import GadGetHeader from "../../images/Gadgetall/GadGetHeader.png";
import TraversalHeader from "../../images/Traversal/TraversalHeader.png";
import Currency from "../../images/Currency/Currency.png";
import ReactMovie from "../../images/ReactMovie/ReactMovie.png";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portfolioData from "../../data/portfolioData.js"

export default function Works() {
  const [list, setList] = useState(portfolioData);

  const [btn, setBtn] = useState('');
  const [change, setChange] = useState('');
  const timerRef = useRef(null);

  const navigate = useNavigate();

  const next = () => {
    const newList = [...list];
    const firstImage = newList.shift();
    newList.push(firstImage);
    setList(newList);
    setBtn("next");
    setChange("change");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { setBtn(''); setChange('') }, 500);
  }

  const prev = () => {
    const newList = [...list];
    const lastImage = newList.pop();
    newList.unshift(lastImage);
    setList(newList);
    setBtn("prev");
    setChange("change");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { setBtn(''); setChange('') }, 500);
  }

  return (
    <div id="portfolio" className={style.container}>
      <div className={style.info}>
        <div className={`${style.title} ${style[change]}`}>
          <h1>My Projects</h1>
        </div>

        <div className={`${style.description}`}>
          <div className={`${style.detail} ${style[change]}`}>
            <p>{list[0].skills}:</p>
            <p>{list[0].description}</p>
          </div>
          <div className={style.more} onClick={() => navigate('/PortfolioDetail', { state: { project: list[0] } })}>
            <p>More Details</p>
          </div>
        </div>
      </div>

      <div className={`${style.works} ${style[btn]}`}>

        {list.map(l =>
          <div className={style.work} key={l.id}>
            <img src={l.images[0]} alt="project image" />
            <div className={style.content}>
            </div>
          </div>

        )}

        <div className={style.thumbnail}>
          {list.map((l, i) => i != 0 &&
            <img src={l.images[0]} alt="sites " />
          )}
          <img src={list[0].images[0]} alt="sites" />
        </div>



        <div className={style.buttons}>
          <span onClick={prev} className={style.prev}><TfiArrowCircleLeft /></span>
          <span onClick={next} className={style.next}><TfiArrowCircleRight /></span>

        </div>
      </div>

    </div >
  )
}

