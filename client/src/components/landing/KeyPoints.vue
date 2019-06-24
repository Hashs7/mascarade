<template>
    <div>
        <ul class="keypoints">
            <li class="keypoints__item">
                <h3 class="keypoints__title">{{ $t('keyPoints.first.title')}}</h3>
                <p class="keypoints__subtitle">{{ $t('keyPoints.first.subTitle')}}</p>
            </li>
            <li class="keypoints__item">
                <h3 class="keypoints__title">{{ $t('keyPoints.second.title')}}</h3>
                <p class="keypoints__subtitle">{{ $t('keyPoints.second.subTitle')}}</p>
            </li>
            <li class="keypoints__item">
                <h3 class="keypoints__title">{{ $t('keyPoints.third.title')}}</h3>
                <p class="keypoints__subtitle">{{ $t('keyPoints.third.subTitle')}}</p>
            </li>
        </ul>

        <div class="stats">
            <div class="stats__item">
                <span class="stats__data">{{ $t('stats.first.data')}}</span>
                <p class="stats__label">{{ $t('stats.first.label')}}</p>
            </div>
            <div class="stats__item">
                <span class="stats__data">{{ $t('stats.second.data')}}</span>
                <p class="stats__label">{{ $t('stats.second.label')}}</p>
            </div>
            <div class="stats__item">
                <span class="stats__data">{{ $t('stats.third.data')}}</span>
                <p class="stats__label">{{ $t('stats.third.label')}}</p>
            </div>
            <div class="stats__item">
                <span class="stats__data">{{ $t('stats.fourth.data')}}</span>
                <p class="stats__label">{{ $t('stats.fourth.label')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "KeyPoints"
    }
</script>

<style scoped>

</style>