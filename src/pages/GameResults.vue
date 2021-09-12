<template>
  <q-page padding class="row justify-center">
    <!-- Total playingtime -->
    <q-card class="col-3 q-ma-xs">
      <q-card-section class="text-h5 bg-primary text-center text-white">
        Players
      </q-card-section>
      <q-list>
        <q-item v-for="(player, index) in players" :key="index">
          <q-item-section side>
            {{ player.rank }}
          </q-item-section>
          <q-item-section class="text-right">
            {{ player.name }}
          </q-item-section>
          <q-item-section side>
            {{ getPlayerPlayTime(index) }}
          </q-item-section>
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
        <q-card-section class="text-h5 text-center">
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
    <div class="col-4 items-stretch q-ma-xs">
      <q-card v-if="firstFourOfAKind.players.length > 0" class="q-mb-sm">
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
          {{ getTotalPlaytime() }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import store from "src/store";
import moment from "moment";

export default {
  setup() {
    const { highHand, firstFourOfAKind, startTime, endTime } = store.state;
    const { getPlayers } = store.getters;
    const sortedPlayers = getPlayers().sort((player1, player2) => {
      return player2.timeOut - player1.timeOut;
    });

    const getTotalPlaytime = function () {
      const startMoment = moment(startTime);
      const endMoment = moment(endTime);
      const diff = endMoment.diff(startMoment);
      return moment.utc(diff).format("HH:mm:ss");
    };

    const getPlayerPlayTime = function (index) {
      const startMoment = moment(startTime);
      const playerOutMoment = moment(sortedPlayers[index].timeOut);
      const diff = playerOutMoment.diff(startMoment);
      return moment.utc(diff).format("HH:mm:ss");
    };

    return {
      highHand,
      firstFourOfAKind,
      players: sortedPlayers,
      getTotalPlaytime,
      getPlayerPlayTime,
    };
  },
};
</script>
