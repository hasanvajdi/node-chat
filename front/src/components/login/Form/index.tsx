import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Form as AntdForm, message } from "antd";

//  styles
import loginFormStyles from "./styles.module.scss";
//  images
import loginAsset from "assets/images/svg/loginAsset.svg";
//  components
import BorderedInput from "components/Inputs/Bordered";
import SubmitButton from "components/Buttons/Submit";
import Spinner from "components/Spinner";
//  hooks
import { useLoginMutation } from "redux/requests/auth";
//  types
import { loginInputsTypes, loginError } from "./types";
//  redux
import { useDispatch } from "redux/hooks";
import { changeSpinner } from "redux/slices/app";

function Form() {
  //  variables
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  hooks
  const [login, loginResult] = useLoginMutation();
  const [messageApi, contextHolder] = message.useMessage();

  //  handlers
  const handleLogin = (data: loginInputsTypes) => {
    login(data);
  };

  //  side effects
  useEffect(() => {
    dispatch(changeSpinner(loginResult.isLoading || loginResult.isSuccess));

    if (loginResult.isError && loginResult.error) {
      var errorObjet: loginError = loginResult.error;
      console.log("aaaa : ", errorObjet);
    }

    if (loginResult.isSuccess) {
      messageApi.success("You have successfully logged in");
      navigate("/home");
    }
  }, [loginResult]);

  return (
    <div className={loginFormStyles.loginFormContainer}>
      {contextHolder}
      <div className={loginFormStyles.loginForm}>
        <div className={loginFormStyles.leftSide}>
          <img src={loginAsset} alt="login assets alt" className="mr-[100px]" />
        </div>
        <div className={loginFormStyles.rightSide}></div>

        <div className={loginFormStyles.form}>
          <Spinner>
            <div className={loginFormStyles.loginTextContainer}>
              <span>Login</span>
              <div className={loginFormStyles.loginUnderline}></div>
            </div>

            <div className={loginFormStyles.formContainer}>
              <AntdForm
                onFinish={handleLogin}
                disabled={!!loginResult.isLoading}
              >
                <AntdForm.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <BorderedInput placeholder="username" />
                </AntdForm.Item>

                <AntdForm.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <BorderedInput placeholder="password" isPasswordInput />
                </AntdForm.Item>

                <SubmitButton block className="mt-4">
                  L O G I N
                </SubmitButton>
              </AntdForm>
            </div>
          </Spinner>

          {/*<div className={loginFormStyles.loginFormText}>
            <span>RUP</span>
            <span>managment</span>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Form;
