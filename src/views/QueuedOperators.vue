<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ $route.params.id }}</ion-title>
        </ion-toolbar>
        <ion-content class="ion-text-center">
            <p :key="item.id" v-for="item in data">
                <br/>
                {{ item }}
            </p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonButton, toastController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonContent, IonPage, IonButton, toastController
    },
    data() {
        return {
            locked: false,
            data: null
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            // eslint-disable-next-line
            const parent_this = this;

            this.locked = true;
            this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/queuedWorkers', {
                params: {
                }
            })
                .then((response: AxiosResponse) => {
                    this.locked = false;
                    if (response.data.status == "okay") {
                        parent_this.data = response.data.data;
                        console.log(response.data.data)
                    }

                })
                .catch((error: any) => {
                    this.locked = false;
                    // Handle error
                    console.error(error); // Log or process the error
                    alert(JSON.stringify(error))
                });

        }
    }
});
</script>

<style scoped>
ion-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>