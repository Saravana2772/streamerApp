import React from 'react'
import './SidebarRows.css';

function SidebarRows({ selected, Icon, title }) {
  return (
    <div className={`SidebarRows ${selected && "selected"}`}>
      <Icon className="SidebarRow-icon"/>
      <h2 className='SidebarRow-title'> {title}</h2>
    </div>
  )
}

export default SidebarRows
