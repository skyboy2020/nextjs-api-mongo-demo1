import Button from '../ui/button'
import classes from './events-search.module.css'
import { useRef } from 'react'
function EventsSearch(props) {
  const yearInputRef = useRef()
  const monthInputRef = useRef()
  // 提交表单（获取年份和月份信息）
  function submitHandler(event) {
    event.preventDefault()

    //获取DOM中的年份和月份值
    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    props.onSearch(selectedYear, selectedMonth)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>年</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>月</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>1月</option>
            <option value='2'>2月</option>
            <option value='3'>3月</option>
            <option value='4'>4月</option>
            <option value='5'>5月</option>
            <option value='6'>6月</option>
            <option value='7'>7月</option>
            <option value='8'>8月</option>
            <option value='9'>9月</option>
            <option value='10'>10月</option>
            <option value='11'>11月</option>
            <option value='12'>12月</option>
          </select>
        </div>
      </div>
      <Button>查询活动</Button>
    </form>
  )
}

export default EventsSearch
