
interface CheckboxProps {
    name: string;
    label: string;
    checked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = ({name, label, checked, handleChange}: CheckboxProps) => {
  return (
    <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
  )
}

export default Checkbox