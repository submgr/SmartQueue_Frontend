<template>
  <ion-page>

    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>{{ $route.params.id }}</ion-title>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>

        <table class="data">
          <tr style="background-color: #0F2D69 !important;">
            <th>Посетитель</th>
            <th>Оператор</th>
            <th>Аудитория</th>
          </tr>

          <tr v-for="item in queueData" :class="{ 'highlighted': item.status === 'Calling' }"
            style="text-align: center;">
            <td :class="{ 'highlighted': item.status === 'Calling' }">{{ item.id }}</td>
            <td :class="{ 'highlighted': item.status === 'Calling' }"> {{ item.worker || "В очереди"}} </td>
            <td :class="{ 'highlighted': item.status === 'Calling' }">{{ workerBinding[item.worker] || "" }}</td>
          </tr>
        </table>
      </div>

      <div style="position: fixed; right: 0; bottom: 4vh; right: 6vw;">
        <img style="height: 15vh;" src="../assets/images/01_Logo_HSE_full_rus_CMYK.png" />
      </div>

      <div v-if="queueData.length < 1" id="container">
        <strong style="font-size: 8vh !important; line-height: 1.7;" class="capitalize">Очередь пуста</strong>
        <p style="font-size: 6vh !important; line-height: 0.75;">Сейчас в очереди никого нет</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons, IonSelect,
  IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  IonItem, IonButton, IonCol,
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonButtons, IonSelect,
    IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonItem, IonButton, IonCol,
  },
  data() {
    return {
      isFullscreen: false,
      // Below we have bidning of Workers to the Rooms where they are placed
      // in format: OPERATOR_ID: ROOOM (STRING FORMAT)
      workerBinding: {
        1: "333",
        2: "3332",
        3: "3333",
        4: "3334",
        5: "3335",
        6: "3336"
      },
      queueData: [

      ]
    }
  },
  mounted() {
    // eslint-disable-next-line
    const parent_this = this;

    setInterval(() => {
      this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/get', {
        
      })
        .then((response: AxiosResponse) => {
          console.log(response.data.data)
          var queueData = []

          needToPlayNotificationSounds = false;

          var needToPlayNotificationSounds = false;
          Object.entries(response.data.data).forEach(([key, value]) => {
            const newData = {
              id: parseInt(key), // Преобразование ключа в число и корректировка id, если необходимо
              worker: parseInt(value.assignedWorker), // Преобразование assignedWorker в число
              room: "", // Установка значения room в пустую строку или другое стандартное значение,
              status: value.serviceState
            };
            if (value.serviceState == "Calling" || value.serviceState == "Queued") {
              queueData.push(newData);
              console.log(value.called)
              if (value.called == "false" || value.called == false) {

                needToPlayNotificationSounds = true;

                this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/called', {
                    params: {
                      id: parseInt(key)
                    }
                  })
                    .then(function (response: AxiosResponse) {
                      // Handle success
                      console.log('Request successful', response);
                    })
                    .catch(function (error) {
                      // Handle error
                      console.error('Request failed', error);
                    });


              }
            }
          });

          if(needToPlayNotificationSounds){
            var audio = new Audio();

                // Step 2: Set the source of the audio file
                audio.src = '../../sounds/calling-sound.mp3'; // Replace with the actual path to your audio file

                // Step 3: Play the sound
                audio.play();
          }

          queueData.sort((a, b) => {
            // Если оба элемента имеют статус "Calling", сортируем по id
            if (a.status === "Calling" && b.status === "Calling") {
              return a.id - b.id;
            }
            // Элементы со статусом "Calling" перемещаем в начало массива
            if (a.status === "Calling") return -1;
            if (b.status === "Calling") return 1;
            // Все остальные элементы сортируем по id
            return a.id - b.id;
          });

          console.log(queueData);
          this.queueData = queueData;
        })
        .catch((error: any) => {
          // Handle error
          console.error(error); // Log or process the error
        });
    }, 4500);

    setInterval(() => {
      this.check();
    }, 3000);
  },
  methods: {
    //
    check() {
      if (!window.screenTop && !window.screenY) {
        if (!this.isFullscreen) {
          //nothing
        } else {
          document.querySelectorAll('ion-menu').forEach(function (element) {
            element.style.display = 'flex';
          });
          document.querySelectorAll('ion-toolbar').forEach(function (element) {
            element.style.display = 'block';
          });
        }
      } else {
        if (this.isFullscreen) {
          //nothing
        } else {
          document.querySelectorAll('ion-menu').forEach(function (element) {
            element.style.display = 'none';
          });
          document.querySelectorAll('ion-toolbar').forEach(function (element) {
            element.style.display = 'none';
          });

        }
      }
    }
  }
});

</script>

<style scoped>
@keyframes lightning {
  0% {
    background-color: transparent;
  }

  50% {
    background-color: #ed576b;
    color: white;
  }

  100% {
    background-color: transparent;
    color: black;
  }
}

.highlighted {
  animation: lightning 4s infinite;
  transform: scaleY(1.1); /* Makes the element 10% bigger */

}

table {
  font-size: 24px;
  width: 100%;
  margin-left: 0%;
  margin-right: 0%;
  margin-top: 0%;
  border-collapse: collapse;
  border-radius: 0px;
  overflow: hidden;
  border-collapse: collapse;
  overflow: hidden;
}

td{
  padding: 1em;
  background: #e6e1e1;
  /* Удалите !important, если он здесь был */
  border-bottom: 2px solid white;
}

tr th{
  background: #0C2D69 !important;
  color: white;
}

th {
  padding: 1.2em;
  background: #20407c;
  color: white;
  font-weight: 400;
  /* Удалите !important, если он здесь был */
  border-bottom: 2px solid #20407c;
}

.css-mine {
  margin-top: 2em;
  clear: both;
}

body {
  margin: 1.5em;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
