import I18n from './i18n'

/**
 * Helper class for converting list of errors tokens to strings using <Translate> component
 * You can add params to errors tokens, e.g.:
 * someErrors.add({ value: 'errors.greaterThan', limit: 10})
 *
 * NOTE: for single token use static toTranslate(), e.g.:
 * errors.address = ErrorList.toTranslate(validator.address(values.get('address')))
 */
class ErrorList {
  constructor () {
    this.errors = []
  }

  getErrors () {
    const length = this.errors.length
    if (!length) {
      return null
    }
    return this.errors
  }

  add (error) {
    if (error === null) {
      return this
    }
    if (typeof error === 'string') {
      // token only
      this.errors.push({
        value: error,
      })
    } else {
      // object with params
      this.errors.push(error)
    }
    return this
  }

  // used for single token
  static toTranslate (token) {
    const vars = typeof token === 'object' ? token : { value: token }
    const {value, ...other} = vars
    return token ? I18n.t(value, other) : null
  }
}

export default ErrorList
