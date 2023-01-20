import React from 'react'

import Reminder from '../interfaces/Reminder'

interface ReminderListProps{
    items:Reminder[]
}

const  RemindeList = ({items}:ReminderListProps) => {
  return (
    <ul className='list-group'>
        {items.map(item => <li className='list-group-item' key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default RemindeList;