import { createWebHistory, createRouter } from "vue-router";
import AllProducts from './pages/AllProducts.vue';
import ProductDetails from './pages/ProductDetails.vue';
import AddProduct from './pages/AddProduct.vue';

const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/products'
        , component: AllProducts
    },
    {
        path: '/products/:pid',
        component: ProductDetails,
        props: true
    },
    {
        path: '/products/add',
        component: AddProduct
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
