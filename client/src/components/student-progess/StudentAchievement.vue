<template>
    <div class="achievements">
        <div class="achievements-group">
        <div class="achievements-container">
            <Logo />
            <ul class="achievements-datas">
                <li class="score">{{points}} point{{isPlurial('points')}}</li>
                <li class="share">{{shares}} partage{{isPlurial('shares')}}</li>
                <li class="report">{{reports}} signalement{{isPlurial('reports')}}</li>
            </ul>
        </div>
        <div class="nav-right">
            <div class="nav-link">
                <router-link class="item home" to="/student/exp">
                    <Home />
                </router-link>
            </div>
            <div class="nav-link">
                <router-link class="item msg" to="/student/messages">
                    <Msg />
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
    import Msg from '@/assets/message.svg';
    import Help from '@/assets/help.svg';
    export default {
        name: "StudentAchievement",
        components: { Logo, Home, Msg, Help },
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
            isPlurial() {
                return type => this.$store.state.score[type] > 1 ? 's' : null;
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-right {
            display: flex;
            align-items: center;
            a, span {
                margin-left: 1rem;
            }
            .item {
                svg {
                    width: 3rem;
                    margin-left: 1rem;
                }
            }
    }
    .nav-link {
        margin-top: 1rem;
    }
    .achievements {
        background:$gradient;
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
                padding-left: 12rem;
            }
        }
        &-group {
            display: flex;
            margin: auto;
            max-width: 1200px;
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
            font-size: 1.4rem;
            line-height: 2.7rem;
            font-weight: bold;
            li {
                border-bottom: 1px solid white;
                width: 11.5rem;
                margin-right: 4rem;
                position: relative;
                &:after { 
                    content: "\26AC";
                    position: absolute;
                    right: -1.5rem;
                    margin-top: 1.3rem;
                }  
            }
        }
    }
</style>