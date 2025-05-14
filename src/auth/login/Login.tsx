import React, { useEffect, useState } from 'react';
import './Login.css'
import "../../styles/style.css"
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { login } from '../../service/AuthService';



const LoginForm: React.FC = () => {
  
  const [ username, setUsername ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  const navigate = useNavigate()

  const { mutate: handleLogin, isSuccess, data } = useMutation({
    mutationKey: ['auth'],
    mutationFn: login,
  })

  const { refetch } = useAuth()

  useEffect(() => {
    if(isSuccess && data) {
      localStorage.setItem("access", data.access)
      localStorage.setItem("refresh", data.access)
      navigate("/")
      refetch()
    }
  }, [isSuccess, data, refetch, navigate])

  const handleSubmit = () => {
    if(username && password) { 
      handleLogin({ username: username, password: password })
    }
  }

  return (
    <div className="login">
      <div className="login__inner">
        <h3 className="login__title">Авторизация</h3>
        <form className="login__container">
          <div className="login__input-box">
            <label className="input-box__label">Телефон:</label>
            <input 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="tel" 
              placeholder="username"/>
          </div>
          <div className="login__input-box">
            <label className="input-box__label">Пароль:</label>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text" 
              placeholder="password"/>
          </div>
        </form>
        <Link to="" className="login__forgot-pass">Забыл пароль</Link>
        <button className="login__btn" onClick={handleSubmit}>Авторизация</button>
        <label>Еще нет аккаунта? <Link to="/register">Регистация</Link></label>
      </div>
      
    </div>   
  );
};

export default LoginForm;
