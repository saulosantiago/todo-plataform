class EmailValidator {
  isValid (email) {
    return true
  }
}

describe('Email Validator', () => {
  test('Should return True if validator returns True', () => {
    const sut = new EmailValidator()
    const isMailValid = sut.isValid('valid_email@mail.com')
    expect(isMailValid).toBe(true)
  })
})
