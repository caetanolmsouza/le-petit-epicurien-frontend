export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5005/'

const sanitiseDate = (datetime) => {
  if (!datetime) {
    return new Date()
  } else if (typeof datetime === 'string' || typeof datetime === 'number') {
    return new Date(datetime)
  }
  return datetime
}
const formatDate = (datetime, targetFormat) => {
  datetime = sanitiseDate(datetime)
  try {
    let { format } = Intl.DateTimeFormat('fr-FR', targetFormat)
    return format(datetime, { timeZone: 'Europe/Paris' })
  } catch (error) {
    console.error('uhohohohoh', datetime, targetFormat)
    return datetime
  }
}
const weekdayDateMonthFormat = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}

export function formatAsInputDate(date) {
  return (
    date &&
    date.getFullYear().toString().padStart(4, '0') +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0')
  )
}

export const formatAsWeekdayDateMonth = (datetime) =>
  formatDate(datetime, weekdayDateMonthFormat)
