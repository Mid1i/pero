import axios from "axios";


export async function fetchRegUser(user) {
    const {data} = await axios.post('https://java.pero-nn.ru/api/auth/sign_up', user);
    return data;
}

export async function fetchEmail(email) {
    const {data} = await axios.post(`https://java.pero-nn.ru/api/auth/send_again/${email}`, {"typeLink": "CONFIRM_LINK"});
    return data;
}