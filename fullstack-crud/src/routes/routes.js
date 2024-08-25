import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../components/ContactList.vue';
import AddContant from '../components/AddContant.vue';

const routes = [
    {
        path: '/',
        name: 'ContactList',
        component: ContactList
    },
    {
        path: '/add_contant',
        name: 'AddContant',
        component: AddContant
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;