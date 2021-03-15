import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? '' : 'http://localhost:3000'
export const itemsUrl = baseUrl + '/items'
export const cartUrl = baseUrl + '/cart'
