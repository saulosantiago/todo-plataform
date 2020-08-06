const validator = require('validator')

class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return True if validator returns True', () => {
    const sut = makeSut()
    const isMailValid = sut.isValid('valid_email@mail.com')
    expect(isMailValid).toBe(true)
  })

  test('Should return False if validator returns False', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isMailValid = sut.isValid('invalid_emaill@mail.com')
    expect(isMailValid).toBe(false)
  })
})
