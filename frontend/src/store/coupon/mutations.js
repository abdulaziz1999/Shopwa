
export function SET_COUPONS (state, payload) {
  state.coupons = payload
}
export function SET_COUPON_DISCOUNT (state, payload) {
  state.coupon_discount = payload
}
export function REMOVE_COUPON (state, payload) {
  state.coupon_discount = null
}

