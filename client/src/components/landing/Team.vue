<template>
    <div>
        <h2>{{ $t('team.title')}}</h2>
        <div class="team-container">
            <div class="developers">
                <h3>{{ $t('team.dev.label')}}</h3>
                <p>{{ $t('team.dev.amelie')}}</p>
                <p>{{ $t('team.dev.seb')}}</p>
            </div>
            <div class="designers">
                <h3>{{ $t('team.graph.label')}}</h3>
                <p>{{ $t('team.graph.flo')}}</p>
                <p>{{ $t('team.graph.lucile')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Team"
    }
</script>

<style scoped>

</style>