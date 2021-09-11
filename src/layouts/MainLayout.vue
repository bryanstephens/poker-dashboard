<template>
  <q-layout view="hHh lpR lFr">
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
        <q-item v-for="(player, index) in players" :key="index" clickable>
          <q-item-section>{{ player.name }}</q-item-section>
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
import store from "src/store/store.js";
import constants from "components/constants.js";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const rightToggleIcon = computed(() => {
      return rightDrawerOpen.value ? "chevron_right" : "chevron_left";
    });

    const { players, highHand } = store.state;
    const { pokerHandRankings } = constants;

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
