import React, { useState } from "react";
import { PiInfoBold } from "react-icons/pi";

const TextInput = ({
  label,
  id,
  register,
  required,
  placeholder,
  onChange,
  defaultValue,
  errors,
  type = "text",
  validation = {},
  isDisabled = false,
  mostrarAyuda,
  infoText,
  ...rest
}) => {
  const [isFieldDisabled, setIsFieldDisabled] = useState(isDisabled);
  const [mostrarAyudaLocal, setMostrarAyudaLocal] = useState(false);
  return (
    <div className="mb-6 md:mb-0 md:col-span-1">
      <div className="flex items-center">
        <label
          htmlFor={id}
          className="block mb-2 mt-2 text-sm font-bold text-gray-300"
        >
          {label}
        </label>
        {mostrarAyuda && (
          <button
            type="button"
            className="ml-2 mb-2 text-blue-500 cursor-pointer focus:outline-none"
            onMouseEnter={() => setMostrarAyudaLocal(true)}
            onMouseLeave={() => setMostrarAyudaLocal(false)}
          >
            <PiInfoBold />
          </button>
        )}
      </div>
      <input
        type={type}
        id={id}
        {...register(id, { required, ...validation })}
        className={`text-sm w-full px-4 py-2 rounded-lg border-2 border-gray-600 bg-raisin text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition ${
          isFieldDisabled ? "opacity-80" : ""
        }`}
        placeholder={placeholder}
        disabled={isFieldDisabled}
        onChange={onChange}
        defaultValue={defaultValue}
        {...rest}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs italic">{errors[id].message}</p>
      )}
      {mostrarAyudaLocal && (
        <div className="absolute max-w-sm mt-2 p-2 bg-white border rounded-md shadow-md">
          <p className="text-gray-600">{infoText}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;