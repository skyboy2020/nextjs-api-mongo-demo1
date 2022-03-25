import Image from 'next/image'
import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'
import LogisticsItem from './logistics-item'
import classes from './event-logistics.module.css'

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props

  const humanReadableDate = new Date(date).toLocaleDateString('zn-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={160} height={160} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{address}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}

export default EventLogistics
