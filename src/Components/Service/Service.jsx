import style from "./Service.module.css"
import backend from '../../images/Services/backend.png'
import frontend from '../../images/Services/frontend.png'

export default function Service() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Services</h1>
            </div>
            <div className={style.services}>
                <div className={style.service}>
                    <div className={style.serviceInner}>
                        <h2>Backend Development
                            <p>I have experience in .Net (C#, Window Forms) ASP.Net (MVC, Razor Pages). I have also used authentication and authorizen procce.</p>
                        </h2>
                        <img src={backend} alt="backend" />

                        <div className={style.content}></div>
                    </div>
                </div>

                <div className={style.service}>
                    <div className={style.serviceInner}>
                        <h2>Frontend Development
                            <p>I have experience in React, CSS, HTML, JavaScript, Node.js</p>
                        </h2>
                        <img src={frontend} alt="frontend" />
                        <div className={style.content}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

