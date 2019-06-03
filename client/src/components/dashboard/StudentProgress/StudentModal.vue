<template>
    <v-dialog
            v-model="modalVisible"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
    >
        <v-card tile>
            <v-toolbar card dark color="primary">

                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="closeModal">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on">Tool Tip Activator</v-btn>
                    </template>
                    Tool Tip
                </v-tooltip>
                <v-list three-line subheader>
                    <v-subheader>User Controls</v-subheader>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Content filtering</v-list-tile-title>
                            <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Password</v-list-tile-title>
                            <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <!--<v-list three-line subheader>
                    <v-subheader>General</v-subheader>
                    <v-list-tile avatar>
                        <v-list-tile-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Notifications</v-list-tile-title>
                            <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-action>
                            <v-checkbox v-model="sound"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Sound</v-list-tile-title>
                            <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-action>
                            <v-checkbox v-model="widgets"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                            <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>-->
            </v-card-text>

            <div style="flex: 1 1 auto;"></div>
        </v-card>
    </v-dialog>
</template>

<script>
    // TODO connect to store

    export default {
        name: "StudentModal",
        computed: {
            modalVisible() {
                console.log(this.$store.state.modalProgress);
                return this.$store.state.modalProgress.isVisible;
            }
        },
        methods: {
            closeModal() {
                this.$store.commit('toggleModal', false)
            }
        }
    }
</script>

<style scoped>

</style>