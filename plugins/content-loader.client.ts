export default defineNuxtPlugin(async nuxtApp => {
  try {
    let res = await fetch('/content.json')
    let data = await res.json() as Content
    useState('content', () => data)
  } catch {
    showError('Ошибка загрузки')
  }
})
