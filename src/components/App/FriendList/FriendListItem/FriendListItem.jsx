import css from './FriendListItem.module.css'
import clsx from "clsx";


export default function FriendListItem({avatar, name, isOnline}) {
    
    const containerClsx = clsx(
        css.container,
        isOnline ? css.isOnline : css.isRetired
      );

    return <div className={containerClsx}>
    <img src={avatar} alt="Avatar" width="48" />
    <p className={css.text}>{name}</p>
    <p>{isOnline ? 'Online' : 'Offline'}</p>
  </div>
}