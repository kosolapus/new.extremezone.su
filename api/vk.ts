import { VK } from 'vk-io'

const vk = new VK({
  token: process.env.VK_KEY || '',
})

export const get = async () => {
  try {
    return await vk.api.market.get({
      owner_id: -61899323,
      count: 50,
      album_id: 0,
    })
  } catch (e) {
    console.error(e)
  }
  return null
}

export const getById = async (params: any) => {
  try {
    return await vk.api.market.getById({
      item_ids: '-61899323_' + params.query.get('ids'),
      extended: true,
    })
  } catch (e) {
    console.error(e)
  }
  return null
}
