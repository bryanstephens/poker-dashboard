<template>
  <q-layout view="hHh LpR lFr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Poker Dashboard</q-toolbar-title>
        <router-link v-slot="{ navigate }" to="/newGame" custom>
          <q-btn color="secondary" label="Start New Game" @click="navigate" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="150"
      behavior="desktop"
      bordered
      side="left"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label header>Players</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-for="(player, index) in players"
          :key="index"
          :disable="player.timeOut >= 0"
          @mouseover="playerOnHover(index)"
          @mouseleave="playerHoverLeave(index)"
        >
          <q-item-section>{{ player.name }}</q-item-section>
          <q-item-section v-if="playerHover === index" side>
            <q-btn
              icon="person_off"
              size="sm"
              round
              flat
              @click="markPlayerOut(index)"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      behavior="desktop"
      :width="200"
      bordered
      side="right"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label header>Hand rankings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-for="(hand, index) in pokerHandRankings"
          :key="index"
          :active="index == highHand.pokerHandIndex"
          :class="{ 'high-hand': index == highHand.pokerHandIndex }"
        >
          <q-item-section>{{ hand }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-sticky position="top-right" :offset="[-5, 20]">
        <q-btn
          color="secondary"
          dense
          :icon="rightToggleIcon"
          @click="toggleRightDrawer"
        />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import store from "src/store";
import constants from "components/constants.js";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const router = useRouter();

    const playerHover = ref(-1);
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const rightToggleIcon = computed(() => {
      return rightDrawerOpen.value ? "chevron_right" : "chevron_left";
    });
    const playerOnHover = function (index) {
      playerHover.value = index;
    };
    const playerHoverLeave = function (index) {
      if (playerHover.value === index) {
        playerHover.value = -1;
      }
    };

    const { players, highHand } = store.state;
    const { markPlayerOut: markPlayerOutAction } = store.actions;
    const { pokerHandRankings } = constants;

    const markPlayerOut = function (index) {
      markPlayerOutAction(index, router);
    };

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      rightToggleIcon,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      players,
      highHand,
      pokerHandRankings,
      playerHover,
      playerOnHover,
      playerHoverLeave,
      markPlayerOut,
    };
  },
});
</script>

<style lang="scss" scoped>
.high-hand {
  color: #fff;
  background: $secondary;
}
</style>
