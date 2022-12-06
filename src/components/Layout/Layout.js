import './Layout.scss';
import Video from '../Video/Video';
import Phases from '../Phases/Phases';
import Slider from '../Slider/Slider.js';


const Layout = () => {
  return (
    <div className='layout'>
        <div className="layout__figure"></div>

    <Video/>
    <Phases/>
    <Slider />
    </div>
  )
}

export default Layout;