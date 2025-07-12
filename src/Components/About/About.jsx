import style from './About.module.css';

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.about}>
                <h1 id='about'>About me</h1>
                <p>I am a Computer Engineering student with a solid understanding of backend
                    development, SQL databases as well as frontend technologies. I can use Git
                    for version control and collaboration. I am responsible, detail-oriented, and work well both
                    independently and in a team. I always try to improve my skills and write clean,
                    efficient code by working on different projects</p>
            </div>
            <div className={style.information}>



                <div className={style.education}>
                    <h2>Education</h2>
                    <p>Azerbaijan State Oil and Industry University
                        <br />
                        SABAH Groups
                        <br />
                        Bachelor of Computer Engineering
                        <br />
                        2022 - 2026
                    </p>


                    <div className={style.lang}>
                        <h2>Languages</h2>
                        <p> Azerbaijan (Native)</p>
                        <p> English (B2)</p>
                    </div>
                </div>



                <div className={style.skill}>
                    <h2>Skills</h2>
                    <ul>
                        <li>.Net (C#, Windows Forms)</li>
                        <li>Asp.Net (MVC, Razor Pages)</li>
                        <li>Html, Css</li>
                        <li>Javascipt, React</li>
                        <li>Node.js, Express</li>
                        <li>SQL (MS Sql, Oracle, My SQL)</li>
                        <li>Git, GitHub</li>
                        <li>Algorithms</li>
                        <li>Problem Solving</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

