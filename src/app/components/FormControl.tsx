"use client";
interface Input {
  label: string;
  type: string;
  isValid: boolean;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormControl: React.FC<Input> = ({
  label,
  type,
  isValid,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <div className={`form-control ${isValid ? "" : "invalid-input"}`}>
        <input
          value={value}
          onChange={onChange}
          placeholder={label}
          id={id}
          type={type}
        />
        <label htmlFor={id} style={{ userSelect: "none" }}>
          {label}
        </label>
      </div>
      {!isValid ? (
        <span className="invalid-feedback">
          Це поле обов<span>&#39;</span>язкове
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormControl;
