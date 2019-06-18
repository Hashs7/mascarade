<template>
    <div class="btn-container">
        <button ref="rippleBtn"
                @click="clickAction"
                class="Button-share btn btn-ripple btn--tamaya"
                :data-text="name"
                data-hover="none"
                @mouseenter="rippleIn"  @mouseleave="rippleOut"  >
            <span class="name">{{name}}</span>
            <svg class="ripple-obj">
                <use width="100"
                     height="100"
                     xlink:href="#ripply-scott"
                     ref="rippleObj"
                     class="js-ripple"></use>
            </svg>
        </button>

        <div style="height: 0; width: 0; position: absolute; visibility: hidden;" aria-hidden="true">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="height: 0; width: 0;" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false">
                <symbol id="ripply-scott" viewBox="0 0 100 100">
                    <circle cx="1" cy="1" r="1" style="fill: #4E00FF;"/>
                </symbol>
            </svg>
        </div>
    </div>
</template>

<script>
    import { TimelineMax } from 'gsap';

    export default {
        props: ['name', 'clickAction'],
        methods: {
            rippleIn(event, timing = .5) {
                const tl         = new TimelineMax();
                const x          = event.offsetX,
                    y            = event.offsetY,
                    w            = event.target.offsetWidth,
                    h            = event.target.offsetHeight,
                    offsetX      = Math.abs( (w / 2) - x ),
                    offsetY      = Math.abs( (h / 2) - y ),
                    deltaX       = (w / 2) + offsetX,
                    deltaY       = (h / 2) + offsetY,
                    scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
                tl.fromTo(this.$refs.rippleObj, timing, {
                    x: x,
                    y: y,
                    transformOrigin: '50% 50%',
                    scale: 0,
                    opacity: 1,
                    ease: Linear.easeIn
                },{
                    x: x,
                    y: y,
                    scale: scale_ratio,
                    opacity: 1
                });

                return tl;
            },
            rippleOut(event, timing = .4) {
                const tl         = new TimelineMax();
                const x          = event.offsetX,
                      y          = event.offsetY;

                tl.to(this.$refs.rippleObj, timing, {
                    x: x,
                    y: y,
                    scale: 0,
                    opacity: 1,
                    ease: Power2.easeOut
                });

                return tl;
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn-container {
        display: inline-block;
    }
    .btn-ripple {
        position: relative;
        background-color: white;
        overflow: hidden;
    }
    .btn:focus {
        outline: none;
    }
    .name {
        position: relative;
        z-index: 20;
        /*mix-blend-mode: exclusion;*/
    }
    .ripple-obj {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        pointer-events: none;
    }

    .ripple-obj use {
        opacity: 0.5;

    }

</style>
