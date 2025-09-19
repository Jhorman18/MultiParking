'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserPlus } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import TextInput from '../Reusable/TextInput';

const RegisterModal = ({ show, onClose, onLoginLink }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const onSubmit = (data) => {
        setLoading(true)
        // Aquí podrías conectar con tu backend. Simulación:
        setTimeout(() => {
            alert(JSON.stringify(data, null, 2))
            setLoading(false)
            onClose()
        }, 1000)
    }

    if (!show) return null

    return (
        <div
            className="fixed inset-0 z-50 grid place-content-center bg-black/60 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registerModalTitle"
        >
            <div className="relative bg-raisin p-6 md:p-10 w-full max-w-xl rounded-2xl shadow-lg ">
                <button
                    aria-label="Cerrar"
                    onClick={onClose}
                    className="cursor-pointer absolute right-4 top-4 text-white hover:text-gray-400 text-2xl"
                >
                    &times;
                </button>
                <div className='flex justify-center text-purple-400 text-4xl mb-3'>
                    <FaUserPlus />
                </div>
                <h2 className="gap-2 text-xl md:text-2xl font-bold text-white mb-1" id="registerModalTitle">
                    Crear Cuenta
                </h2>
                <p className="text-white/60 mb-6 text-sm">
                    Regístrate para acceder a tu parqueadero
                </p>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="grid md:grid-cols-2 gap-4 mb-2">
                        <TextInput
                            label="Nombre"
                            id="nombre"
                            placeholder="Juan"
                            register={register}
                            required={{ value: true, message: "El nombre es obligatorio" }}
                            errors={errors}
                        />
                        <TextInput
                            label="Apellido"
                            id="apellido"
                            placeholder="Pérez"
                            register={register}
                            required={{ value: true, message: "El apellido es obligatorio" }}
                            errors={errors}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-2">
                        <TextInput
                            label="Correo Electrónico"
                            id="correo"
                            type="email"
                            placeholder="juan.perez@email.com"
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
                        <TextInput
                            label="Teléfono"
                            id="telefono"
                            placeholder="300 123 4567"
                            register={register}
                            required={{ value: true, message: "El teléfono es obligatorio" }}
                            errors={errors}
                            validation={{
                                pattern: {
                                    value: /^[0-9\s+()-]{7,20}$/,
                                    message: "Teléfono inválido"
                                }
                            }}
                        />
                    </div>

                    {/* Campo Contraseña */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 mt-2 text-sm font-bold text-gray-300">
                            Contraseña
                        </label>
                        <div className="relative flex items-center">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: { value: 6, message: "Debe tener al menos 6 caracteres" },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                                        message: "Debe incluir mayúscula, minúscula, número y símbolo"
                                    }
                                })}
                                className="text-sm w-full px-4 py-2 pr-10 rounded-lg border-2 border-gray-600 bg-raisin text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                                autoComplete="off"
                                disabled={loading}
                            />
                            <button
                                type="button"
                                className="cursor-pointer absolute right-3 text-gray-400 hover:text-purple-400 focus:outline-none bg-transparent p-0"
                                style={{ top: '50%', transform: 'translateY(-50%)' }}
                                onClick={() => setShowPassword((v) => !v)}
                                tabIndex={-1}
                            >
                                {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs italic mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Campo Confirmar Contraseña */}
                    <div className="mb-4">
                        <label htmlFor="password2" className="block mb-2 mt-2 text-sm font-bold text-gray-300">
                            Confirmar Contraseña
                        </label>
                        <div className="relative flex items-center">
                            <input
                                id="password2"
                                type={showPassword2 ? "text" : "password"}
                                placeholder="••••••••"
                                {...register("password2", {
                                    required: "Confirma tu contraseña",
                                    validate: value => value === watch('password') || "Las contraseñas no coinciden"
                                })}
                                className="text-sm w-full px-4 py-2 pr-10 rounded-lg border-2 border-gray-600 bg-raisin text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                                autoComplete="off"
                                disabled={loading}
                            />
                            <button
                                type="button"
                                className="cursor-pointer absolute right-3 text-gray-400 hover:text-purple-400 focus:outline-none bg-transparent p-0"
                                style={{ top: '50%', transform: 'translateY(-50%)' }}
                                onClick={() => setShowPassword2((v) => !v)}
                                tabIndex={-1}
                            >
                                {showPassword2 ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                            </button>
                        </div>
                        {errors.password2 && (
                            <p className="text-red-500 text-xs italic mt-1">{errors.password2.message}</p>
                        )}
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-full mt-4 flex items-center justify-center gap-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 focus:outline-none transition"
                    >
                        <FaUserPlus /> Crear Cuenta
                    </button>
                </form>
                <div className="mt-4 text-center text-white/70 text-sm">
                    ¿Ya tienes cuenta?{' '}
                    <button
                        className="cursor-pointer text-purple-400 hover:underline font-medium"
                        onClick={onLoginLink}
                        type="button"
                    >
                        Inicia sesión aquí
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal