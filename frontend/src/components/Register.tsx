import React from "react";
import { Form, Link } from "react-router-dom";
import "../scss/profile.scss";

export const Register: React.FC = () => {
  function registerRequest() {}

  return (
    <div className="profile border my-4 mx-auto shadow rounded text-center">
      <Form
        method="post"
        action="/register"
        className="px-4 register__form-signin"
      >
        <p className="h3 text-green">Пожалуйста, зарегистрируйтесь</p>
        <img className="my-3 w-25" src="logo512.png" alt="" />
        <div className="form-floating">
          <input
            type="text"
            name="nickname"
            className="form-control"
            id="nickname"
            placeholder="nickname"
            required
            maxLength={255}
          />
          <label htmlFor="nickname" className="text-dark">
            Никнейм
          </label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            name="email"
            id="rgEmail"
            placeholder="name@example.com"
            required
            maxLength={255}
          />
          <label htmlFor="floatingInput" className="text-dark">
            Email-адрес
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="Password"
            id="rgPassword"
            placeholder="Password"
            required
            maxLength={255}
          />
          <label htmlFor="rgPassword" className="text-dark">
            Пароль
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="password-2 form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Password"
            required
            maxLength={255}
          />
          <label htmlFor="confirmPassword" className="text-dark">
            Подтвердите пароль
          </label>
        </div>
        <div className="mt-3 mb-5">
          <span className="">Выберите фотографию</span>
          <input
            type="file"
            className="form-control h-auto"
            id="loadProfilePic"
            placeholder="dsds"
          />
        </div>
        <button
          type="submit"
          onClick={registerRequest}
          className="btn login__btn mb-2 bg-gray-400 border border-4 w-100"
        >
          <span className="">Зарегистрироваться</span>
        </button>
        <Link
          to="/login"
          className="btn login__btn bg-gray-400 border border-4 w-100"
        >
          Войти
        </Link>
        <p className="mt-2 mb-3">&copy; 2022</p>
      </Form>
    </div>
  );
};
