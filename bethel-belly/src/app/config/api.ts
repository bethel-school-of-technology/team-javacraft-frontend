import { environment } from 'src/environments/environment'
// TODO : Add DB/ API route
export const baseUrl = environment.production ? '' : ''
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
