import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Category from '../components/Category.vue';
import ProductDetail from '../components/ProductDetail.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category/:categoryName',
        name: 'Category',
        component: Category,
        props: route => ({ categoryName: route.params.categoryName })
    },
    {
        path: '/product/:productId',
        name: 'ProductDetail',
        component: ProductDetail,
        props: route => ({ productId: route.params.productId })
    }
];

const router = createRouter({
    history: createWebHashHistory(), // 使用 Hash 模式
    routes
});

export default router;
