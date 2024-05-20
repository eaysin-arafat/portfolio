import React from "react";

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
  name?: string;
  label?: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  max?: number;
  id?: string;
};

export default function Textarea({
  className,
  disabled,
  errMsg,
  label,
  max,
  name,
  onChange,
  placeholder,
  required,
  value,
  id,
}: Props) {
  return (
    <div className="flex flex-col">
      <textarea
        className="form-control px-2 py-1"
        placeholder={placeholder}
        id={id}
        name={name}
      ></textarea>

      {errMsg && <span className="input_error  ">{errMsg}!</span>}
    </div>
  );
}
