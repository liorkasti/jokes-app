export function phoneValidator(phone) {
  const re = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/
  if (!phone) return "Phone number can't be empty."
  if (!re.test(phone)) return 'Ooops! We need a valid phone number.'
  return ''
}
