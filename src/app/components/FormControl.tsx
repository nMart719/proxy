"use client"
interface Input {
    label: string,
    type: string,
    isValid: boolean,
}
const FormControl: React.FC<Input> = ({ label, type, isValid }) => {
    return (
        <div className="flex flex-col">
            <div className={`form-control ${isValid ? '' : 'invalid-input'}`}>
                <input type={type} placeholder={label} />
                <label>{label}</label>

            </div>
            {!isValid ?
                <span className="invalid-feedback">Це поле обов<span>&#39;</span>язкове</span>
                : ""}
        </div>
    )
}

export default FormControl;