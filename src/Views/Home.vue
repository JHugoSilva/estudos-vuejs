<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/home">Empresa 360</router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'dashboard'}" exact-active-class="active"><i class="bi bi-speedometer2"></i> Dashboard</router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'vendas'}" exact-active-class="active"><i class="bi bi-cart"></i> Vendas</router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'leads'}" exact-active-class="active"><i class="bi bi-caret-right"></i> Leads</router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name:'contratos'}" exact-active-class="active"><i class="bi bi-caret-right"></i> Contratos</router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'servicos'}" exact-active-class="active"><i class="bi bi-card-checklist"></i> Serviços</router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                   <!-- <h1 class="mt-4">Visões relacionadas ao menu</h1>
                    <p>Aqui podemos apresentar as views de acordo com as opções do menu.</p> -->
                    <router-view/>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}
/*
.router-link-active {
    color: #FFF;
    background-color: #65A1FA;
    border-color: #65A1FA;
}*/

/*.router-link-exact-active {
    color: #FFF;
    background-color: #0D6EFD;
    border-color: #0D6EFD;
}*/

.ativo {
    color: #FFF;
    background-color: #F00;
    border-color: #F00;
}

</style>