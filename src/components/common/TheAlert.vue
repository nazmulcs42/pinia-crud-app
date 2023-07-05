<template>
    <div>
        <div class="alert alert-success alert-dismissible fade show py-2" role="alert" v-if="alert.status == 'success'">
            <span><strong>Success! </strong> {{ alert.message }}</span>
            <button type="button" class="close py-2 px-3" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-warning alert-dismissible fade show py-2" role="alert" v-if="alert.status == 'warning'">
            <strong>Warning! </strong>{{ alert.message }}
            <button type="button" class="close py-2 px-3" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-danger alert-dismissible fade show py-2" role="alert" v-if="alert.status == 'danger'">
            <strong>Alert! </strong> {{ alert.message }}
            <button type="button" class="close py-2 px-3" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    props: ["alert"],
    setup () {
        return {
            //
        }
    }
}

</script>

<style scoped>

</style>