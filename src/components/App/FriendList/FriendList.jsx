import FriendListItem from "./FriendListItem/FriendListItem.jsx"
import clsx from "clsx";
import css from './FriendList.module.css'


export default function FriendList({friends}){
    return (<div>
        <ul className={css.list}>
            { friends.map((friend) => {
                return <li key={friend.id}>
                    <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
                </li>})
            }
        </ul>
            </div>
        )}
