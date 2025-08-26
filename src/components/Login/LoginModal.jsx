'use client';

import React, { useState } from 'react';
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function LoginModal({ show, onClose }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}\nPassword: ${form.password}\nRemember: ${form.remember}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="bg-raisin p-18 relative w-full max-w-md rounded-lg p-6 shadow-lg dark:bg-gray-900">
        <button
          aria-label="Close"
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 text-white hover:text-gray-400 dark:hover:text-white text-2xl"
        >
          &times;
        </button>
        <h2
          id="modalTitle"
          className="mb-4 text-xl font-bold text-white sm:text-2xl text-center"
        >
          Accede a nuestra plataforma
        </h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label htmlFor="email" className="text-start mb-1 block text-sm font-medium text-white">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:text-white dark:border-gray-700"
              placeholder="correo@email.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-start mb-1 block text-sm font-medium text-white">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:text-white dark:border-gray-700"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
                className="cursor-pointer h-4 w-4 rounded border-indigo text-indigo-600"
                style={{ accentColor: "var(--color-slateblue)" }}
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-white">
                Recuérdame
              </label>
            </div>
            <button
              type="button"
              className="cursor-pointer text-sm text-indigo hover:underline focus:outline-none dark:text-blue-400"
            // onClick={} // Add forgot password handler here
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
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