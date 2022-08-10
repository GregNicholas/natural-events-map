import { useState } from 'react'
import { FcGlobe } from 'react-icons/fc'
import { MdOutlineLocalFireDepartment } from 'react-icons/md'
import Checkbox from './Checkbox'

interface HeaderProps {
  checked: {
    wildfires: boolean;
    severeStorms: boolean;
    volcanoes: boolean;
    seaLakeIce: boolean;
};
  setChecked: React.Dispatch<React.SetStateAction<{
                  wildfires: boolean;
                  severeStorms: boolean;
                  volcanoes: boolean;
                  seaLakeIce: boolean;
              }>>
}

const Header = ({checked, setChecked}: HeaderProps) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name:string = e.target.name
    const checked:boolean = e.target.checked
    setChecked(prev => {
      return {...prev, [name]: checked}
    });
  };
  return (
    <header className="header">
        <div>
        <span className="header-icon"><FcGlobe /></span>
        <h1>Natural Events Tracker</h1>
        </div>
        <div className="selections">
          <Checkbox name="wildfires" label="Wildfires" checked={checked.wildfires} handleChange={handleChange}/>
          <Checkbox name="severeStorms" label="Severe Storms" checked={checked.severeStorms} handleChange={handleChange}/>
          <Checkbox name="volcanoes" label="Volcanoes" checked={checked.volcanoes} handleChange={handleChange}/>
          <Checkbox name="seaLakeIce" label="Sea/Lake Ice" checked={checked.volcanoes} handleChange={handleChange}/>
        </div>
    </header>
  )
}

export default Header