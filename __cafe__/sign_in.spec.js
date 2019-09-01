import {Selector} from 'testcafe'

const url = 'http://localhost:5000'

fixture('サインイン')
  .page(`${url}`)

test('入力エリアがあること', async t => {
  await t
    .expect(Selector('#account').exists).ok()
    .expect(Selector('#password').exists).ok()
})
