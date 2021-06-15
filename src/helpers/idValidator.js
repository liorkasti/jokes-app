export function idValidator(id) {
  const re = /^\d{9}$/
  if (!id) return "ID can't be empty."
  if (!re.test(id)) return 'Ooops! We need a valid id number.'
  return ''
}
