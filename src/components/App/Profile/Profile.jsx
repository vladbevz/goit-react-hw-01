
import css from './Profile.module.css'

export default function Profile ({username, tag, location, avatar, stats}) {
    return <div className={css.container}>
    <div >
      <img className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="160"
      />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.list}>
      <li className={css.listitem}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.listitem}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.listitem}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>

}