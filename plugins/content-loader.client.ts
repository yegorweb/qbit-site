export default defineNuxtPlugin(async nuxtApp => {
  try {
    let res = await fetch('/content.json')
    let data = await res.json() as Content
    useState('content').value = data
  } catch {
    showError({ message: 'Ошибка загрузки' })
  }
})
