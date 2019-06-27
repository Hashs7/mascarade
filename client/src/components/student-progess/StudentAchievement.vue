<template>
    <div class="achievements">
        <div class="achievements-group">
            <div class="achievements-container">
                <router-link class="item home" to="/exp">
                    <Logo/>
                </router-link>
                <!--<ul class="achievements-datas">
                    <li class="share">{{shares}} partage{{isPlurial('shares')}}</li>
                    <li class="report">{{reports}} signalement{{isPlurial('reports')}}</li>
                </ul>-->
            </div>
            <div class="nav-right">
                <div class="nav-link nav-score">
                    <transition name="fade">
                        <span class="increase-score" v-if="showIncrease">{{increaseScore}}</span>
                    </transition>
                    <span class="score item">{{points}}</span>
                    <Score/>
                </div>
                <div class="nav-link" :class="{hasNotif: hasNotif}">
                    <router-link class="item msg" to="/messages">
                        <Msg/>
                    </router-link>
                </div>
                <div class="nav-link">
                    <span class="item help">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <button v-on="on">
                                <Help />
                            </button>
                          </template>
                          <span>Demander de l'aide à l'intervenant</span>
                        </v-tooltip>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '@/assets/logo.svg';
    import Home from '@/assets/home.svg';
    import Msg from '@/assets/messages.svg';
    import Help from '@/assets/help.svg';
    import Score from '@/assets/score_moon.svg';

    export default {
        name: "StudentAchievement",
        components: {Logo, Home, Msg, Help, Score},
        data: () => ({
            showIncrease: false,
        }),
        computed: {
            points() {
                return this.$store.state.score.points;
            },
            shares() {
                return this.$store.state.score.shares;
            },
            reports() {
                return this.$store.state.score.reports;
            },
            increaseScore() {
                return this.$store.state.score.increaseScore;
            },
            hasNotif() {
                return this.$store.state.messages.hasNotif;
            },
            isPlurial() {
                return type => this.$store.state.score[type] > 1 ? 's' : null;
            }
        },
        watch: {
            points: function (val) {
                console.log('increase');
                this.showIncrease = true;
                setTimeout(() => { this.showIncrease = false }, 1200);
            },
        },
    }
</script>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s, transform .5s ease;
    }
    .fade-enter {
        opacity: 0;
        transform: translateY(20px);
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }

    .increase-score {
        font-size: 22px;
        margin-right: 10px;
        font-weight: bold;
    }

    .nav-right {
        display: flex;
        align-items: center;

        .nav-link {
            margin-left: 2rem;
        }

        .item svg {
            width: 3rem;
            vertical-align: middle;
        }
    }

    .item {
        vertical-align: center;

        &.home {
            cursor: pointer;
            display: flex;
        }

        &.score {
            margin-bottom: 0;
            margin-right: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .nav-link {
        position: relative;

        &.hasNotif:before {
            position: absolute;
            top: -6px;
            right: -6px;
            display: block;
            content: '';
            width: 14px;
            height: 14px;
            border-radius: 100%;
            background-color: $violet;
        }
    }

    .nav-score {
        display: flex;
        align-items: center;
    }

    .achievements {
        background: $gradient;
        color: white;
        display: flex;
        justify-content: space-around;
        position: fixed;
        top: 0;
        z-index: 35;
        left: 0;
        right: 0;

        &-container {
            display: flex;
            align-items: center;
            height: 7rem;

            svg {
                text-align: center;
            }

            ul {
                display: flex;
                padding-left: 22rem;
                padding-right: 16rem;
            }
        }

        &-group {
            display: flex;
            margin: auto;
            max-width: 900px;
            width: 100%;
            justify-content: space-between;
        }

        &-title {
            color: $white;
            font-size: 2.6rem;
            line-height: 3.1rem;

            li:last-child {
                text-transform: uppercase;
            }
        }

        &-datas {
            font-size: 1.5rem;
            line-height: 2.7rem;
            font-weight: bold;

            li {
                width: 11.5rem;
                margin-right: 4rem;
                position: relative;
            }
        }
    }
</style>