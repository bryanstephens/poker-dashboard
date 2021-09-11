<template>
  <q-page padding class="row justify-center">
    <!-- Total playingtime -->
    <q-card class="col-3 q-ma-xs">
      <q-card-section class="text-h5 bg-primary text-center text-white">
        Players
      </q-card-section>
      <q-list>
        <q-item v-for="(player, index) in players" :key="index">
          <q-item-section> {{ player.name }} </q-item-section>
          <q-item-section side> {{ player.rank }} </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <div class="col-4">
      <q-card class="q-ma-xs">
        <q-card-section class="text-h5 bg-primary text-center text-white">
          High Hand
        </q-card-section>
        <q-card-section class="text-h4 text-center text-weight-bold">
          {{ highHand.title }}
        </q-card-section>
        <q-card-section class="text-h5 text-center"> Jack High </q-card-section>
        <q-card-section
          v-for="(player, index) in highHand.players"
          :key="index"
          class="text-center text-h4 text-accent"
        >
          {{ player }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-4 items-stretch q-ma-xs">
      <q-card class="q-mb-sm">
        <q-card-section class="text-h5 bg-primary text-center text-white">
          First Four of a Kind
        </q-card-section>
        <q-card-section
          v-for="(player, index) in firstFourOfAKind.players"
          :key="index"
          class="text-h4 text-center text-weight-bold"
        >
          {{ player }}
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="text-h5 bg-primary text-center text-white">
          Play Time
        </q-card-section>
        <q-card-section class="text-h4 text-center text-weight-bold">
          04:45
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import store from "src/store/store.js";

export default {
  setup() {
    const { highHand, firstFourOfAKind, players } = store.state;
    const { getPlayers } = store.getters;

    return {
      highHand,
      firstFourOfAKind,
      players: getPlayers().sort((player1, player2) => {
        return player1.timeOut - player2.timeOut;
      }),
    };
  },
};
</script>
