<template>
    <div>
        <h5>Lead - {{ dados.id }} - {{ dados.nome }}</h5>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
            <label class="col-sm-2 col-form-label">NOME</label>
             <div class="col-sm-10 mb-2">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
            <label class="col-sm-2 col-form-label">TELEFONE</label>
             <div class="col-sm-10 mb-2">
                <input type="text"  class="form-control" :value="dados.telefone">
            </div>
            <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-warning" @click="$router.push({ name: 'leads'})">Voltar</button>
                <button type="button" class="btn btn-primary">Autalizar</button>
            </div>
        </div>
    </div>
</template>
<script>

import ApiMixin from '../../mixins/ApiMixin'
export default {
    name: 'Lead',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}
</script>