import { createRouter, createWebHistory } from 'vue-router'
import Home from './Views/Home.vue'
import Login from './Views/Login.vue'
import Site from './Views/Site.vue'
import Vendas from './components/vendas/Vendas.vue'

const routes = [
    {
        path: '/',
        component: Site,
        name: 'site'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'vendas',
                component: Vendas,
                name: 'vendas',
                children: [
                    {
                        path: '',
                        component:() => import('./components/vendas/VendasPadrao.vue')
                    },
                    {
                        path: 'leads',
                        name: 'leads',
                        component:() => import('./components/vendas/Leads.vue'),
                    },
                    {
                        path: 'lead/:id',
                        name: 'lead',
                        component:() => import('./components/vendas/Lead.vue'),
                    },
                    {
                        path: 'contratos',
                        name: 'contratos',
                        component:() => import('./components/vendas/Contratos.vue')
                    }
                ]
            },
            {
                path: 'servicos',
                name: 'servicos',
                component: ()=> import('./components/servicos/Servicos.vue'),
                children:[
                    {
                        path:':id',
                        name: 'servico',
                        component: () => import('./components/servicos/Servico.vue')
                    }
                ]
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: ()=> import('./components/dashboard/Dashboard.vue')
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router