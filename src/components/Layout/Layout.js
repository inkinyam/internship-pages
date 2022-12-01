import './Layout.scss';
import Video from '../Video/Video';
import Phases from '../Phases/Phases';


const Layout = () => {
  return (
    <div className='layout'>
        <div className="layout__figure"></div>

    <Video/>
    <Phases/>
    </div>
  )
}

export default Layout;