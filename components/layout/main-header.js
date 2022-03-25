import Link from 'next/link'
import classes from './main-header.module.css'
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>活动行</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>查看所有活动</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
