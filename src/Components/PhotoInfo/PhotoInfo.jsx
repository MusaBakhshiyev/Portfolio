import style from './PhotoInfo.module.css';
import my_photo from '../../images/Me/my_photo.png';
import { useEffect, useRef, useState } from 'react';

export default function PhotoInfo() {
    const [jobs, setJobs] = useState(['Backend Developer', 'Frontend Developer']);
    const [index, setIndex] = useState(0);
    const time = useRef();

    useEffect(() => {
        clearTimeout(time.current);
        time.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % jobs.length);
        }, 4000);

    }, [index]);

    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.name}>
                    <h1>Musa Bakhshiyev</h1>
                </div>
                <div className={style.speciality}>
                    <h2>{jobs[index]}</h2>
                    <p>Hello! I’m Musa, a full-stack developer and Computer Engineering student who enjoys building creative, functional, and user-friendly web applications using .NET and React.</p>
                </div>
            </div>
            <div className={style.photo}>
                <header className="header">
                    <a href="#about">About</a>
                    <a href="#">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </header>
                <img src={my_photo} alt="my photo" />
            </div>
        </div>
    )
}


