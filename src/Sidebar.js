import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcons from "@material-ui/icons/Home";
import SearchIcons from "@material-ui/icons/Search";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className='Sidebar'>
      <img className='Sidebar-logo' src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg'
        alt='spotify-logo'
      />
      
      <SidebarOption title="Home" Icon={HomeIcons} /> 
      <SidebarOption title="Search" Icon={SearchIcons} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br/>
      <strong className='Sidebar_title'>PLAYLISTS</strong>
      <hr/>
      {playlists?.items.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
