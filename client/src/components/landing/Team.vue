<template>
    <div class="team">
        <h2 class="team__title">{{ $t('team.title')}}</h2>
        <div class="team-container">
            <div class="developers">
                <h3>{{ $t('team.dev.label')}}</h3>
                <p><span>Amélie Laurent</span>{{ $t('team.dev.amelie')}}</p>
                <p><span>Sébastien Hernoux</span>{{ $t('team.dev.seb')}}</p>
            </div>
            <div class="designers">
                <h3>{{ $t('team.graph.label')}}</h3>
                <p><span>Florian Weidmann</span>{{ $t('team.graph.flo')}}</p>
                <p><span>Lucile Perrin</span>{{ $t('team.graph.lucile')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Team"
    }
</script>

<style scoped lang="scss">
    .team {
        max-width: 1200px;
        margin: auto;
        display: flex;
        align-items: center;
        height: 85vh;
        &-container {
            margin-left: 160px;
        }
        &__title {
            font-size: 120px;
            line-height: 130px;
            max-width: 40%;
            opacity: 0.2;
            text-transform: uppercase;
            font-weight: 500;
        }
        .developers, .designers {
            h3 {
                margin-bottom: 3rem;
                font-size: 30px;
                font-weight: 500;
            }
            p {
                margin-bottom: 0;
            }
            span {
                font-weight: bold;
            }
        }
        .developers {
            margin-bottom: 6rem;
        }
    }
</style>