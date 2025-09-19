'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from "react-icons/hi";
import TextInput from '../Reusable/TextInput';

export default function LoginModal({ show, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  // Inicializa React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    }
  });

  if (!show) return null;

  const onSubmit = (data) => {
    alert(`Email: ${data.email}\nPassword: ${data.password}\nRemember: ${data.remember}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="bg-raisin p-18 relative w-full max-w-md rounded-lg p-6 shadow-lg">
        <button
          aria-label="Close"
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 text-white hover:text-gray-400 text-2xl"
        >
          &times;
        </button>
        <h2
          id="modalTitle"
          className="mb-4 text-xl font-bold text-white sm:text-2xl text-center"
        >
          Accede a nuestra plataforma
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {/* Email */}
          <TextInput
            label="Correo electrónico"
            id="email"
            type="email"
            placeholder="correo@email.com"
            register={register}
            required={{ value: true, message: "El correo es obligatorio" }}
            errors={errors}
            validation={{
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Correo inválido"
              }
            }}
          />

          {/* Password */}
          <div className="relative mb-4">
            <TextInput
              label="Contraseña"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              register={register}
              required={{ value: true, message: "La contraseña es obligatoria" }}
              errors={errors}
              validation={{
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres"
                }
              }}
            />
            <button
              type="button"
              className="cursor-pointer absolute right-3 top-9 text-gray-400 hover:text-indigo"
              onClick={() => setShowPassword(v => !v)}
              tabIndex={-1}
              style={{ top: '75%', transform: 'translateY(-60%)' }}
            >
              {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
            </button>
          </div>

          {/* Remember me */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                {...register("remember")}
                className="cursor-pointer h-4 w-4 rounded border-indigo text-indigo-600"
                style={{ accentColor: "var(--color-slateblue)" }}
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-white">
                Recuérdame
              </label>
            </div>
            <button
              type="button"
              className="cursor-pointer text-sm text-indigo hover:underline focus:outline-none"
              // onClick={} // Add forgot password handler here
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full rounded-md bg-slateblue px-4 py-2 text-white font-semibold hover:bg-indigo focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Acceder a tu cuenta
          </button>
        </form>
      </div>
    </div>
  );
}