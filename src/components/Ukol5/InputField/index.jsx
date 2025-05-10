import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  const handleChange = (e) => {
    onValueChange(e.target.value)
  };

    return (
    <div className="input-field">
      <label>{label}
      <input
        type={type}
        value={value}
        onChange={handleChange}
      />
      </label>
    </div>
  );
};
