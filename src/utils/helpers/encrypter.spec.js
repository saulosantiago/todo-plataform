const bcrypt = require('bcrypt')

class Encrypter {
  async compare (value, hash) {
    return bcrypt.compare(value, hash)
  }
}

describe('Encrypter', () => {
  test('Should return true if bcrypt returns true', async () => {
    const sut = new Encrypter()
    const isValid = await sut.compare('any_value', 'hashed_hash')
    expect(isValid).toBe(true)
  })

  test('Should return false if bcrypt returns false', async () => {
    const sut = new Encrypter()
    bcrypt.isValid = false
    const isValid = await sut.compare('any_value', 'hashed_hash')
    expect(isValid).toBe(false)
  })

  test('Should call bcrypt with correct values', async () => {
    const sut = new Encrypter()
    await sut.compare('any_value', 'hashed_hash')
    expect(bcrypt.value).toBe('any_value')
    expect(bcrypt.hash).toBe('hashed_hash')
  })
})