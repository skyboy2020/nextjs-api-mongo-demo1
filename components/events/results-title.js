import Button from '../ui/button'
import classes from './results-title.module.css'

function ResultsTitle(props) {
  const { date } = props

  const humanReadableDate = new Date(date).toLocaleDateString('zn-CH', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className={classes.title}>
      <h1>{humanReadableDate}活动列表</h1>
      <Button link='/events'>查看所有活动</Button>
    </section>
  )
}

export default ResultsTitle
