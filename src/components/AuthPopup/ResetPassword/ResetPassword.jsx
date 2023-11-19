import {useContext} from "react";
import classNames from "classnames";

import {isEmptyValue} from "@utils/helpers"; 
import {authContext} from "@services";

import "./ResetPassword.style.scss";


export default function ResetPassword() {
    const {inputsError, inputsValue, onSubmitForm, setInputsValue} = useContext(authContext);


    return (
        <>
            <p className="auth-popup__title">Забыли пароль?</p>
            <p className="auth-popup__subtitle">
                <span className="auth-popup__subtitle-text">Введите данные для восстановления доступа в личный кабинет</span>
            </p>
            <p className="auth-popup__error">{inputsError?.exist || ''}</p>
            <form autoComplete="off" className="auth-popup__form" onSubmit={onSubmitForm}>
                <div className="auth-popup__form-wrapper auth-form">
                    <input
                        className="auth-form__input"
                        id='email'
                        onChange={(event) => setInputsValue({...inputsValue, 'email': event.target.value})}
                        type='email'
                        placeholder='Email'
                        value={isEmptyValue(inputsValue, 'email')}
                        required
                    />
                    <label 
                        className={classNames("auth-form__label", 
                            !!inputsError?.['email'] && "auth-form__label--error",
                            !!inputsValue?.['email'] && "auth-form__label--active"
                        )} 
                        htmlFor={'email'}
                    >
                        {inputsError?.['email'] || 'Email'}
                    </label>
                </div>
                <button className="auth-popup__form-btn" type="submit">Отправить письмо</button>
            </form>
        </>
    );
}