/* eslint-disable react/prop-types */
import { useState } from "react";
import { fetcher } from "../../lib/api.js";
import { setToken } from "../../lib/auth.js";
import { VITE_PUBLIC_STRAPI_URL } from "../../../env.js";
import { useNavigate } from "react-router-dom";

export default function LoginRegister({
  isLoginForm,
  handlePasswordClick,
  handleMouseLeave,
}) {
  const navigateTo = useNavigate();
  let canLogin = false;

  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    birthday: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const respData = await fetcher(
      // eslint-disable-next-line no-undef
      `${VITE_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: loginData.identifier,
          password: loginData.password,
        }),
      }
    );
    setToken(respData);
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const respRegisterData = await fetcher(
        // eslint-disable-next-line no-undef
        `${VITE_PUBLIC_STRAPI_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            birthday: registerData.birthday,
            username: registerData.username,
            email: registerData.email,
            password: registerData.password,
          }),
        }
      );
      isAdult();
      if (canLogin) {
        console.log(respRegisterData, "respRegisterData user");
        setToken(respRegisterData);
        navigateTo.push("/monkey-sanctuary/my-sanctuary");
      } else alert("little monkey cant grab the tree!");
      console.log(`respRegisterData: ${respRegisterData}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (isLoginForm)
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    if (!isLoginForm) {
      if (e.target.name === "birthday") {
        const formattedDate = e.target.value.split("/").reverse().join("-");
        setRegisterData({ ...registerData, [e.target.name]: formattedDate });
      } else {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
      }
    }
  };

  return (
    <>
      <h3>
        {isLoginForm ? "Already on the tree?" : "Aren't you on the tree yet?"}
      </h3>
      <form onSubmit={isLoginForm ? handleSubmitLogin : handleSubmitRegister}>
        {!isLoginForm && (
          <>
            <label htmlFor="birthday">
              <input
                onChange={handleChange}
                type="date"
                name="birthday"
                id="birthday"
              />
            </label>
            <label htmlFor="username">
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="username"
                placeholder="Your Username"
              />
            </label>
            <label htmlFor="email">
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </label>
          </>
        )}
        {isLoginForm && (
          <label htmlFor="identifier">
            <input
              onChange={handleChange}
              type="text"
              name="identifier"
              id="identifier"
              placeholder="Your Username"
            />
          </label>
        )}
        <label htmlFor="password">
          <input
            onChange={handleChange}
            onClick={handlePasswordClick}
            onFocus={handlePasswordClick}
            onBlur={handleMouseLeave}
            onMouseOver={handlePasswordClick}
            onMouseLeave={handleMouseLeave}
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            autoComplete=""
          />
        </label>
        <button type="submit">Come up!</button>
      </form>
    </>
  );
  //
  //
  function isAdult() {
    // formatto l'età per come deve arrivare al server
    const formattedDate = registerData.birthday.split("/").reverse().join("-");
    // calcolol'età corrente
    const birthDate = new Date(formattedDate);
    const currentDate = new Date();
    const userbirthday = currentDate.getFullYear() - birthDate.getFullYear();
    // se l'utente è minorenne
    if (userbirthday >= 18) canLogin = true;
  }
}
