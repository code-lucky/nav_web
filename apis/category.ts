import { http } from '../utils/http';

export function categoryList() {
    return http({ url: '/category/categoryList', method: 'get' })
}

export function getNavArray() {
    return http({ url: '/category-nav/getNavArray', method: 'get' })
}