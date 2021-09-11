<template>
  <q-page padding>
    <div class="flex justify-center items-start items-stretch">
      <q-card class="q-ma-xs" style="width: 330px">
        <q-card-section>
          <base-timer />
        </q-card-section>
        <q-card-actions align="around">
          <q-btn
            class="q-mb-sm"
            color="primary"
            round
            icon="play_arrow"
            size="lg"
          />
          <q-btn
            class="q-mb-sm"
            color="primary"
            round
            icon="refresh"
            size="lg"
          />
        </q-card-actions>
      </q-card>
      <div style="display: grid">
        <q-card class="q-ma-xs self-stretch">
          <q-card-section class="text-h5 text-center text-white bg-primary">
            Big Blind
          </q-card-section>
          <q-card-section class="text-h1 text-center text-weight-bold">
            {{ bigBlind }}
          </q-card-section>
        </q-card>
        <q-card class="q-ma-xs self-stretch">
          <q-card-section class="text-h5 text-center text-white bg-primary">
            Small Blind
          </q-card-section>
          <q-card-section class="text-h1 text-center text-weight-bold">
            {{ smallBlind }}
          </q-card-section>
        </q-card>
      </div>
      <q-card class="q-ma-xs" style="width: 330px">
        <q-card-section class="text-h5 text-center text-white bg-primary">
          High Hand
        </q-card-section>
        <q-card-section class="text-h3 text-center text-weight-bold">
          {{ highHand.title }}
        </q-card-section>
        <q-card-section class="text-h4 text-center">
          {{ highHand.qualifier }}
        </q-card-section>
        <q-card-section
          v-for="(player, index) in highHand.players"
          :key="index"
          class="text-center text-h4 text-accent"
        >
          {{ player }}
        </q-card-section>
      </q-card>
    </div>
    <!-- Timer with pause/resume -->
    <!-- Blinds -->
    <!-- High hand -->
  </q-page>
</template>

<script>
import BaseTimer from "components/BaseTimer.vue";
import store from "src/store/store.js";

export default {
  components: {
    BaseTimer,
  },
  setup() {
    const { highHand, bigBlind, smallBlind } = store.state;

    return {
      highHand,
      bigBlind,
      smallBlind,
    };
  },
};
</script>
