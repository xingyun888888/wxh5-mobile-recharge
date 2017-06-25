
import axios from 'axios'

function get (url, params) {
  return axios.get(url, { params })
}

function post (url, params) {
  return axios.post(url, params)
}

const rootUrl = 'http://www.byjiedian.com/index.php/byjie'

const urls = {
  userInfo: 'http://byjiedian.com/index.php?m=byjie&a=info'
}

/**
 * 获取微信jssdk签名
 * http://byjiedian.com/index.php?m=byjie&a=get_sign&url=xxx
 */
export function apiGetSign (url) {
  return get(rootUrl + '/get_sign', {
     url: url
  })
}

/**
 * 获取用户信息
 * http://byjiedian.com/index.php?m=byjie&a=info'
 */
export function apiUserInfo () {
  return get(rootUrl + '/info')
}

/**
 * 租借记录
 * http://byjiedian.com/index.php?m=byjie&a=order_list
 */

export function apiOrderList () {
  return get(rootUrl + '/order_list')
}

/**
 * 交易明细
 * 
 */

export function apiTradeList () {
  return get(rootUrl + '/trade_list')
}

/**
 * 获取周边店铺地址位置及信息
 * http://byjiedian.com/index.php?m=byjie&a=get_pos 
 */
export function apiNearShop (lat, lng) {
  return get(rootUrl + '/get_posi', {
    lat,
    lng
  })
}

/**
 * 押金充值100
 * https://byjiedian.com/index.php?m=byjie&a=get_pay
 */
export function apiRecharge () {
  return get(rootUrl + '/get_pay')
}

/**
 * 检查支付状态
 * http://www.byjiedian.com/index.php/byjie/check_pay/B062310826794157237386948
 */
export function apiCheckPay (order_no) {
  return get(rootUrl + '/check_pay', {
    order_no
  })
}