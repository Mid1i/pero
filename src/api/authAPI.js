import {authURL} from "@utils/constants";


export const fetchLogin = `${authURL}/sign/in`;

export const fetchRegistration = `${authURL}/sign/up`;


export const fetchEmail = (email) => `${authURL}/send/${email}`;

export const fetchAuthVerify = (uuid) => `${authURL}/email/confirm/${uuid}`;

export const fetchAuthPasswordReset = (uuid) => `${authURL}/password/change/${uuid}`;


export const fetchAuthSignOut = `${authURL}/sign/out`;


export const refreshTokens = `${authURL}/token/refresh`;


export const globalAuthSignOut = `${authURL}/sign/global_out`;
