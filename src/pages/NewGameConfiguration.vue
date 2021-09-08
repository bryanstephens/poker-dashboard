<template>
  <q-page padding class="flex justify-center">
    <!-- add players -->

    <q-form
      autofocus
      style="width: 500px"
      class="flex column"
      @submit="startGame"
    >
      <q-btn type="submit" label="Start Game" color="primary" class="q-mb-md" />

      <q-input
        v-model="time"
        label="Blind duration"
        filled
        mask="time"
        :rules="['time']"
      >
        <template #append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="time" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input
        v-model="smallBlind"
        type="number"
        filled
        label="Starting small blind"
        no-error-icon
        class="q-mb-md"
        @change="handleSmallBlindChange"
      />
      <q-input
        v-model="bigBlind"
        type="number"
        filled
        label="Starting big blind"
        no-error-icon
        class="q-mb-md"
        @change="handleBigBlindChange"
      />
      <q-input
        v-model="playerToAdd"
        filled
        label="Add a player"
        @keypress.enter.prevent="addPlayer(playerToAdd)"
      >
        <template #append>
          <q-btn icon="add" round flat @click="addPlayer(playerToAdd)" />
        </template>
      </q-input>
      <q-list>
        <q-item
          v-for="(player, index) in playerList"
          :key="index"
          clickable
          @click="removePlayer(index)"
        >
          <q-item-section>{{ player }}</q-item-section>
          <q-item-section side><q-icon name="remove" /></q-item-section>
        </q-item>
      </q-list>
    </q-form>
  </q-page>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const time = ref("00:30");
    const smallBlind = ref(5);
    let lastGoodSmallBlind = 5;
    const bigBlind = ref(10);
    let lastGoodBigBlind = 5;
    const playerToAdd = ref("");
    const playerList = reactive([]);

    const handleSmallBlindChange = function (newVal) {
      if (newVal > lastGoodSmallBlind) {
        smallBlind.value = lastGoodSmallBlind + 5;
      }
      if (newVal < lastGoodSmallBlind) {
        smallBlind.value = lastGoodSmallBlind - 5;
      }
      lastGoodSmallBlind = smallBlind.value;
    };

    const handleBigBlindChange = function (newVal) {
      if (newVal > lastGoodBigBlind) {
        bigBlind.value = lastGoodBigBlind + 5;
      }
      if (newVal < lastGoodBigBlind) {
        bigBlind.value = lastGoodBigBlind - 5;
      }
      lastGoodBigBlind = bigBlind.value;
    };

    const addPlayer = function (newPlayer) {
      if (newPlayer) {
        playerList.push(newPlayer);
      }
      playerToAdd.value = "";
    };

    const removePlayer = function (index) {
      playerList.splice(index, 1);
    };

    const startGame = function () {};

    return {
      time,
      smallBlind,
      bigBlind,
      playerToAdd,
      playerList,
      handleSmallBlindChange,
      handleBigBlindChange,
      addPlayer,
      removePlayer,
      startGame,
    };
  },
};
</script>
