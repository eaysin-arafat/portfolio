import React from "react";

type Props = {
  id?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  type?: string;
  className?: string;
  placeholder?: string;
  onClick?: () => void;
};

export default function Input({
  id,
  name,
  className,
  disabled,
  errMsg,
  label,
  onChange,
  onClick,
  placeholder,
  required,
  type,
  value,
}: Props) {
  return (
    <div className="flex flex-col">
      <input
        className="form-control px-2 py-1"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
      />

      {errMsg && <span className="input_error  ">{errMsg}!</span>}
    </div>
  );
}
