interface loginInputsTypes {
  name: string;
  password: string;
}

interface loginError {
  status?: number;
  data?: any;
}

interface loginSuccessType {
  access_token: string;
}

export type { loginInputsTypes, loginError, loginSuccessType };
