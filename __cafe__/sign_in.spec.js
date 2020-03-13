import {Selector} from 'testcafe'

const url = 'http://localhost:5000'

fixture('サインイン')
  .page(`${url}`)

test('入力エリアがあること', async t => {
  await t
    .expect(Selector('#account').exists).ok()
    .expect(Selector('#password').exists).ok()
})

test('アカウントを入力できること', async t => {
  await t
    .typeText(Selector('#account'), 'hoge')
    .expect(Selector('#account').value).eql('hoge')
})

test('パスワードを入力できること', async t => {
  await t
    .typeText(Selector('#password'), '999')
    .expect(Selector('#password').value).eql('999')
})
