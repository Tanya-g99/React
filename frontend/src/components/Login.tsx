import React from "react";
import { Form, Link } from "react-router-dom";
import "../scss/profile.scss";

type LoginProps = {
  login: () => void;
};

export const Login: React.FC<LoginProps> = ({ login }) => {
  return (
    <div className="profile border my-4 mx-auto shadow rounded text-center">
      <Form method="post" action="/login" className="px-4 login__form-signin">
        <p className="h3 text-green">Пожалуйста, войдите</p>
        <img className="my-3 w-25" src="logo512.png" alt="" />
        <div className="form-group">
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              id="logEmail"
              placeholder="name@example.com"
              maxLength={255}
              required
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              id="logPassword"
              placeholder="Password"
              maxLength={255}
              required
            />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Запомнить
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn login__btn mb-2 bg-gray-400 border border-4 w-100"
          onClick={login}
        >
          Войти
        </button>
        <Link
          to="/register"
          className="btn login__btn bg-gray-400 border border-4 w-100"
        >
          Зарегистрироваться
        </Link>
        <p className="mt-2 mb-3">&copy; 2022</p>
      </Form>
    </div>
  );
};
