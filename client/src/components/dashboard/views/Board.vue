<template>
    <div>
        <TrapInfoContainer />
        <div class="bottom-container">
            <TrapRecap />
            <SessionTime
                    name="Temps minimal d'une session"
                    time="4m5"
                    :timeValue="45"/>
            <SessionTime
                    name="Temps maximal d'une session"
                    time="4m5"
                    :timeValue="45"/>
            <SessionTime
                    name="Temps moyen d'une session"
                    time="4m5"
                    :timeValue="45"/>
        </div>
    </div>
</template>

<script>
    import TrapInfoContainer from '@/components/dashboard/TrapInfo/TrapInfoContainer';
    import SessionTime from '@/components/dashboard/TrapInfo/SessionTime';
    import TrapRecap from '@/components/dashboard/TrapInfo/TrapRecap';

    export default {
        name: "Board",
        components: {
            TrapInfoContainer,
            SessionTime,
            TrapRecap
        }
    }
</script>

<style scoped>
.bottom-container {
    display: flex;
    justify-content: space-between;
}
</style>