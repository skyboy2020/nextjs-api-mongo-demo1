import Image from 'next/image'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import Button from '../ui/button'
import classes from './event-item.module.css'

function EventItem(props) {
  const { id, title, image, date, location } = props
  //日期处理
  const humanReadableDate = new Date(date).toLocaleDateString('zh-CN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  //动态路由
  const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={250} height={230} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>查看活动详情</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
