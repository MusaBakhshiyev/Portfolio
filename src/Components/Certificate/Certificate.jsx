import style from "./Certificate.module.css"
import Pasha from '../../images/Certificates/Pasha.png'
import CFF from '../../images/Certificates/CFF.png'
import ICPC1 from '../../images/Certificates/ICPC1.png'
import ICPC2 from '../../images/Certificates/ICPC2.png'
import IFD from '../../images/Certificates/IFD.png'
import IFS from '../../images/Certificates/IFS.png'

export default function Certificate() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Certificates</h1>
            </div>
            <div className={style.certificates}>

                <div className={style.certificate}>
                    <img src={CFF} alt="CFF" />
                    <div className={style.content}></div>
                </div>

                <div className={style.certificate}>
                    <img src={Pasha} alt="Pasha" />
                    <div className={style.content}></div>
                </div>

                <div className={style.certificate}>
                    <img src={ICPC1} alt="ICPC1" />
                    <div className={style.content}></div>
                </div>

                <div className={style.certificate}>
                    <img src={ICPC2} alt="ICPC2" />
                    <div className={style.content}></div>
                </div>

                <div className={style.certificate}>
                    <img src={IFD} alt="IFD" />
                    <div className={style.content}></div>
                </div>

                <div className={style.certificate}>
                    <img src={IFS} alt="IFS" />
                    <div className={style.content}></div>
                </div>



            </div>
        </div>
    )
}

