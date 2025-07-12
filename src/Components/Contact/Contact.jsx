import style from "./Contact.module.css"
import costume from "../../images/Me/costume.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
    return (
        <div className={style.container}>
            <div className={style.contacts}>

                <img src={costume} alt="me" />
                <div className={style.contact}>
                    <h1>Contact me</h1>
                    <div className={style.info}>
                        <div>
                            <p>Mail:</p>
                            <p>musabaxsiyev2005@gmail.com</p>
                        </div>
                        <div>
                            <p>My number:</p>
                            <p>+994 55 942 35 12</p>
                        </div>

                        <div className={style.social}>
                            <div className={style.media}>
                                <a target="blank" href="https://www.linkedin.com/in/musa-bakhshiyev-351a74293/"><FaLinkedin /></a>
                                <a target="self" href="https://github.com/MusaBakhshiyev"><FaGithubSquare /></a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
