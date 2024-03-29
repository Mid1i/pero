import {useContext} from "react";
import axios from "axios";

import {toFormatEmail, toFormatTime, toFormatTimeText} from "@utils/helpers"; 
import {authContext} from "@services";
import {fetchEmail} from "@api";

import "./EmailConfirming.style.scss";


export default function EmailConfirming() {
    const {authStep, inputsValue, timer, setTimer} = useContext(authContext);

    
    const onClickResendBtn = () => {
        const data = {
            'emailConfirming': 'CONFIRM',
            'emailReset': 'RESET_PASSWORD',
        };

        axios.post(fetchEmail(inputsValue.email), {"typeLink": data[authStep]});
        setTimer(59);

        const countdown = window.setInterval(() => {
            if (timer > 0) {
                setTimer(prev => prev - 1);
            } else {
                clearInterval(countdown);
            }
        }, 1000);
    }


    return(
        <>
            <h3 className="auth-popup__title auth-popup__title--success">{'emailConfirming' === authStep ? 'Подтверждение почтового адреса' : 'Изменение пароля'}</h3>
            <p className="auth-popup__text">{`Ссылка для ${'emailConfirming' === authStep ? 'подтверждения' : 'сброса пароля'} отправлена на ${toFormatEmail(inputsValue?.email)}. Перейдите по ссылке из письма в течение 24 часов. Если письмо не пришло, проверьте папку "спам" в Вашем почтовом ящике.`}</p>
            <button 
                className="auth-popup__btn" 
                disabled={timer > 0 ? true : false}
                onClick={onClickResendBtn}
            >
                {`Отправить ещё раз ${timer > 0 ? `через ${toFormatTime(timer)} ${toFormatTimeText(timer)}` : ''}`}
            </button>
        </>
    );
}