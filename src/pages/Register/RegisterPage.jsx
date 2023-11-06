import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authSlice';

import css from './RegisterPage.module.css';

const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data))
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.formLabel}>
        <span>Email:</span>
        <input className={css.formInput} {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </label>
      <label className={css.formLabel}>
        <span>Name:</span>
        <input className={css.formInput} {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </label>
      <label className={css.formLabel}>
        <span>Password:</span>
        <input className={css.formInput}
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button className={css.signButton} type="submit">Sign Up</button>
    </form>
  )
}

export default RegisterPage