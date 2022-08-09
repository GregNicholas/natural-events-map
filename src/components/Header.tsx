import { FcGlobe } from 'react-icons/fc'
import { MdOutlineLocalFireDepartment } from 'react-icons/md'

const Header = () => {
  return (
    <header className="header">
        <span className="header-icon"><FcGlobe /></span>
        <h1>Natural Events Tracker</h1>
    </header>
  )
}

export default Header