import Head from 'next/head'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'
import NewsletterRegistration from '../components/input/newsletter-registration'
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>活动行</title>
        <meta
          name='description'
          content='找好活动，办好活动，上活动行！'
        ></meta>
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  )
}

export default HomePage

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}
