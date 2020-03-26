/**
 * @desc http 通信を行うベースクラス
 */
class HttpBase {
  /**
   * HTTP GET
   * @param {string} uri    Request URI
   * @return {object}       レスポンスデータ
   * @private 
   */
  async _get(uri) {
    const option = {
      method:   'GET',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'}
    }
    const response = await fetch(uri, option)
    if (response.status >= 400) {
      throw new Error(response.statusText)
    }

    return response.json()
  }

  /**
   * HTTP POST
   * @param {string} uri    Request URI
   * @param {object} data   送信データ (JSON 化可能なもの)
   * @return {object}       レスポンスデータ
   * @private 
   */
  async _post(uri, data) {
    const option = {
      method:   'POST',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'},
      body:     JSON.stringify(data)
    }
    const response = await fetch(uri, option)
    if (response.status >= 400) {
      throw new Error(response.statusText)
    }

    return response.json()
  }
}

export default HttpBase
