<template>
    <div class="datas">
        <div class="datas__container">
            <img class="keypoints__image" :src="logoOpacity"/>
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
    </div>
</template>

<script>
    import LogoOpacity from '@/assets/img/landing/logo_background.png';

    export default {
        name: "KeyPoints",
        data: () => ({
            logoOpacity: LogoOpacity,
        }),
    }
</script>

<style scoped lang="scss">
.keypoints {
    padding-bottom: 10rem;
    padding-top: 5rem;
    margin-top: 5rem;
    padding-left: 55px;
    &__title {
        font-size: 20px;
        font-weight: 500;
    }
    &__subtitle {
        max-width: 35%;
    }
    &__item {
        margin-bottom: 30px;
        position: relative;
        &:before {
            content: "";
            width: 15px;
            height: 15px;
            border-radius: 100%;
            border: 2px solid $violet;
            position: absolute;
            top: 7px;
            left: -40px;
        }
    }
    &__image {
        position: absolute;
        right: 0;
        top: 0;
    }
}
.datas {
    position: relative;
    &__container {
        max-width: 1200px;
        margin: auto;
    }
}
.stats {
    display: flex;
    margin-bottom: 10rem;
    &__item {
        text-align: center;
        width: calc(100% / 4);
        padding-right: 3rem;
    }
    &__data {
        color: $blue;
        font-size: 30px;
    }
}
</style>