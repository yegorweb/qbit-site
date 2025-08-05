declare global {
  interface CourseContent {
    name: string // html
    price: number // руб/занятие
    min_age: number // years
    description: string // html
    teacher: {
      name: string // html
      avatar: string // url
    }
    image: string // url
    duration: number // минут в занятии
    frequency: number // занятий в неделю
  }
	interface Content {
	  webdevinfo: CourseContent
    drawinginfo: CourseContent
    scratchinfo: CourseContent
    javainfo: CourseContent
  }
}

export { Content, CourseContent }