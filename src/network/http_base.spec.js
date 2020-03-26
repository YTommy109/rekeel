import HttpBase from './http_base'

/** @test {HttpBase} */
describe('HttpBase クラスについて', () => {
  const target = new HttpBase()

  /** @test {HttpBase#_get} */
  describe('_get メソッドについて', () => {
    const req_header = {
      method:   'GET',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'}
    }
    const res_header  = {status: 200, headers: {'Content-Type': 'application/json; charset=utf-8'}}
    const data        = {result: 'ok'}
  
    beforeEach(() => {
      fetch.resetMocks()
    })
  
    /** @test {HttpBase#_get} */
    it('正常時にデータを返すこと', async () => {
      
      fetch.mockResponseOnce(JSON.stringify(data), res_header)
      expect(await target._get('a')).toEqual(data)
      expect(fetch).toBeCalledWith('a', req_header)
    })
  
    /** @test {HttpBase#_get} */
    it('fetch 呼び出しパラメータが適切であること', async () => {
      fetch.mockResponseOnce(JSON.stringify(data), res_header)
      await target._get('a')
      expect(fetch).toBeCalledWith('a', req_header)
    })
  
    /** @test {HttpBase#_get} */
    it('異常時に例外が起こること', async () => {
      fetch.mockResponseOnce(JSON.stringify(data), {...res_header, status: 404})
      await expect(target._get('a')).rejects.toThrow('Not Found')
    })
  })

  /** @test {HttpBase#_post} */
  describe('_post メソッドについて', () => {
    const req_data    = {
      name: 'hoge'
    }
    const req_header  = {
      method:   'POST',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'},
      body:     JSON.stringify(req_data)
    }
    const res_header  = {status: 200, headers: {'Content-Type': 'application/json; charset=utf-8'}}
    const res_data    = {result: 'ok'}
  
    beforeEach(() => {
      fetch.resetMocks()
    })
  
    /** @test {HttpBase#_post} */
    it('正常時にデータを返すこと', async () => {
      
      fetch.mockResponseOnce(JSON.stringify(res_data), res_header)
      expect(await target._post('a', req_data)).toEqual(res_data)
    })
  
    /** @test {HttpBase#_post} */
    it('fetch 呼び出しパラメータが適切であること', async () => {
      fetch.mockResponseOnce(JSON.stringify(res_data), res_header)
      await target._post('a', req_data)
      expect(fetch).toBeCalledWith('a', req_header)
    })
  
    /** @test {HttpBase#_post} */
    it('異常時に例外が起こること', async () => {
      fetch.mockResponseOnce(JSON.stringify(res_data), {...res_header, status: 403})
      await expect(target._post('a', req_data)).rejects.toThrow('Forbidden')
    })
  })
})
