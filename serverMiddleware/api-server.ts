import * as url from 'url'

export default async (req: any, res: any, _: any) => {
  let urlString = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '')
  urlString = urlString.split('/')
  const method = urlString.pop()
  const controller = urlString.slice(1).join('/')
  const api = require('../api/' + controller)

  const search = new url.URL('http://dum.my?' + req._parsedUrl.query)

  const result = await api[method]({
    params: req.params,
    query: search.searchParams,
  })
  res.end(JSON.stringify(result))
}
