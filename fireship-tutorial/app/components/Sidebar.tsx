import { FaBeer, FaPoo, } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { FcStackOfPhotos } from 'react-icons/fc';
import { GiPhotoCamera } from 'react-icons/gi';

import { IconType } from 'react-icons';

const SideBar = (): JSX.Element => {
  return <div className="fixed top-0 h-screen w-16 m-0 
  flex flex-col
  bg-gray-100 text-gray-900
  shadow
  dark:bg-gray-900 dark:text-white
   ">
    <SideBarIcon icon={<FaBeer size={28} />} />
    <SideBarIcon icon={<BiPhotoAlbum size={28} />} />
    <SideBarIcon icon={<GiPhotoCamera size={28} />} />
    <SideBarIcon icon={<FcStackOfPhotos size={28} />} tooltipText="hello" />
  </div>
};


const defaultToolip: string = 'tooltip ';

function SideBarIcon(props: { icon: JSX.Element, tooltipText?: string }): JSX.Element {
  const text = props.tooltipText ?? defaultToolip;
  return <div className="sidebar-icon group">
    {props.icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text} &#128161;
    </span>
  </div>;
}

export default SideBar;