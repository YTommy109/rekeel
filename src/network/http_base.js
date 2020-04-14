/**
 * @desc http 通信を行うベースクラス
 */
class HttpBase {
  /**
   * fetch
   * @param {string} uri    Request URI
   * @param {string} option fetch option
   * @return {object}       レスポンスデータ
   * @throws {Error}        http status が 400 以上の場合
   * @private 
   */
  async _fetch(uri, option) {
    const response = await fetch(uri, option)
    if (response.status >= 400) {
      throw new Error(response.statusText)
    }

    return response.json()
  }

  /**
   * HTTP GET
   * @param {string} uri    Request URI
   * @return {object}       レスポンスデータ
   * @throws {Error}        http status が 400 以上の場合
   * @private 
   */
  async _get(uri) {
    const option = {
      method:   'GET',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'}
    }

    return this._fetch(uri, option)
  }

  /**
   * HTTP POST
   * @param {string} uri    Request URI
   * @param {object} data   送信データ (JSON 化可能なもの)
   * @return {object}       レスポンスデータ
   * @throws {Error}        http status が 400 以上の場合
   * @private 
   */
  async _post(uri, data) {
    const option = {
      method:   'POST',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'},
      body:     JSON.stringify(data)
    }

    return this._fetch(uri, option)
  }

  /**
   * HTTP PUT
   * @param {string} uri    Request URI
   * @param {object} data   送信データ (JSON 化可能なもの)
   * @return {object}       レスポンスデータ
   * @throws {Error}        http status が 400 以上の場合
   * @private 
   */
  async _put(uri, data) {
    const option = {
      method:   'PUT',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'},
      body:     JSON.stringify(data)
    }

    return this._fetch(uri, option)
  }

  /**
   * HTTP DELETE
   * @param {string} uri    Request URI
   * @return {object}       レスポンスデータ
   * @throws {Error}        http status が 400 以上の場合
   * @private 
   */
  async _delete(uri) {
    const option = {
      method:   'DELETE',
      headers:  {'Content-Type': 'application/json; charset=utf-8', 'Accept-Language': 'ja'}
    }

    return this._fetch(uri, option)
  }
}


export default HttpBase
