
interface loginInputsTypes {
    name: string,
    password: string
}

interface loginError {
    status?: number;
    data?: any;
}


export type { loginInputsTypes, loginError }