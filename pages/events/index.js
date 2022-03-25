import { getAllEvents } from '../../helpers/api-util'
import { useRouter } from 'next/router'
import Head from 'next/head'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { Fragment } from 'react'
function AllEventsPage(props) {
  const router = useRouter()

  const { events } = props

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <Head>
        <title>所有活动</title>
        <meta
          name='description'
          content='找好活动，办好活动，上活动行！'
        ></meta>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  }
}
