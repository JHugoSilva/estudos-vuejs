<template>
    <div>
        <h5>Serviços</h5>
        <hr>
        <div class="row">
            <div class="col" v-for="dado in dados" :key="dado.id">
                <div class="card" style="width:11rem">
                    <img class="card-img-top" :src="`/img/${dado.icone}`">
                    <div class="card-body text-center">
                        <p class="card-text">{{ dado.servico }}</p>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
import ApiMixin from '../../mixins/ApiMixin'
export default {
    name: 'Leads',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi('http://localhost:3000/servicos')
    }
}
</script>