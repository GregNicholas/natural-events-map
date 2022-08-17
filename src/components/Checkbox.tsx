import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoMdThunderstorm, IoMdAlert }  from 'react-icons/io'
import { WiVolcano } from 'react-icons/wi'
import { GiIceberg } from 'react-icons/gi'

interface CheckboxProps {
    icon?: string;
    name: string;
    label: string;
    checked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = ({icon="", name, label, checked, handleChange}: CheckboxProps) => {
  let displayIcon:JSX.Element = <></>
  switch(name) {
    case 'wildfires':
      displayIcon = <MdOutlineLocalFireDepartment />
      break;
    case 'severeStorms':
      displayIcon = <IoMdThunderstorm />
      break;
    case 'volcanoes':
      displayIcon = <WiVolcano />
      break;
    case 'seaLakeIce':
      displayIcon = <GiIceberg />
      break;
    default:
      // no icon
  }
  return (
    <label>
        <input
          className="checkbox"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        <span className={icon}>{displayIcon}</span>
        
        {label}
    </label>
  )
}

export default Checkbox