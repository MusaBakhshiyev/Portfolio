import style from "./Contact.module.css"
import pasha from "../../images/Me/pasha.jpg"
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
    return (
        <div className={style.container}>
            <div className={style.contacts}>

                <img src={pasha} alt="me" />
                <div className={style.contact}>
                    <h1>Contact me</h1>
                    <div className={style.info}>
                        <h2>Mail: musabaxsiyev2005@gmail.com</h2>
                        <h2>My number: +994 55 942 35 12</h2>
                        <div className={style.social}>
                            <h2>Social media:</h2>
                            <div className={style.media}>
                                <TbBrandLinkedinFilled />
                                <FaGithubSquare />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
