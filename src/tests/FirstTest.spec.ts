import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Julio'

  expect(user.name).toEqual('Julio Moraes')
})
