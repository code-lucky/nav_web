import { http } from '../utils/http';

export function categoryList() {
    return http({ url: '/category/categoryList', method: 'get' })
}