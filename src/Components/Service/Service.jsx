import style from "./Service.module.css"
import backend from '../../images/Services/backend.png'
import frontend from '../../images/Services/frontend.png'

export default function Service() {
    return (
        <div id='service' className={style.container}>
            <div className={style.title}>
                <h1>Services</h1>
            </div>
            <div className={style.services}>
                <div className={style.service}>
                    <div className={style.serviceInner}>
                        <h2>Backend Development
                            <p>I have experience in authentication and authorization processes, RESTful APIs, Entity Framework Core, and architectural patterns such as the Repository Pattern, Unit of Work (UoW), and Onion Architecture.</p>
                        </h2>
                        <img src={backend} alt="backend" />

                        <div className={style.content}></div>
                    </div>
                </div>

                <div className={style.service}>
                    <div className={style.serviceInner}>
                        <h2>Frontend Development
                            <p>I use Redux for state management, CSS Modules for styling, and Axios or Fetch for data fetching. I work with React Router and follow a modular, component-based architecture. I also have experience with localStorage and IndexedDB.</p>
                        </h2>
                        <img src={frontend} alt="frontend" />
                        <div className={style.content}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

