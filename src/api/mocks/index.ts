import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from './get-day-orders-amout'
import { getManagedRestaurantMock } from './get-managed-restaurant'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders.amout'
import { getMonthRevenueMock } from './get-month-revenue'
import { getOrderDetailsMock } from './get-orders-detailts-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products.mock'
import { getProfileMock } from './get-profile'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { UpdateProfileMock } from './update-profile'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getMonthCanceledOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  UpdateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
