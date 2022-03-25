const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: '开发者沙龙·成都站',
    description:
      '了解最前沿的前端开发技术，与优秀开发团队面对面分享，并结识到行业大佬与志同道合的开发者伙伴！',
    location: '成都市高新区天府五街',
    date: '2021-05-18',
    image: 'images/developer-salon.jpg',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: '一人一乐器|乐队合奏',
    description:
      '每周分享一首不同的流行歌曲。现场提供把玩的乐器，有电钢琴、吉他、尤克里里、非洲鼓、架子鼓、陶笛、沙锤、贝斯、电吉他。过程中会带着参加者一起玩对应的乐器。 把所有的乐器都串联起来。 ',
    location: '成都市金牛区槐树街',
    date: '2021-06-10',
    image: 'images/band-ensemble.jpg',
    isFeatured: false,
  },
  {
    id: 'e3',
    title: '西西弗书店·博物馆实用指南',
    description:
      ' 5月18日为国际博物馆日，由国际博物馆协会（ICOM）于1977年发起并创立。1977年国际博物馆协会为促进全球博物馆事业的健康发展，吸引全社会公众对博物馆事业的了解、参与和关注，向全世界宣告1977年5月18日为第一个国际博物馆日，并每年为国际博物馆日确定活动主题。这一天世界各地博物馆都将举办各种宣传、纪念活动，庆祝自己的节日，让更多的人了解博物馆，更好地发挥博物馆的社会功能。',
    location: '成都市武侯区凯德广场',
    date: '2022-05-18',
    image: 'images/sisyphe-park-books.jpg',
    isFeatured: true,
  },
]

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  return filteredEvents
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id)
}
