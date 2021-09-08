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
          <q-card-section class="text-h5 text-center">
            Big Blind
          </q-card-section>
          <q-card-section class="text-h1 text-center text-weight-bold">
            1280
          </q-card-section>
        </q-card>
        <q-card class="q-ma-xs self-stretch">
          <q-card-section class="text-h5 text-center">
            Small Blind
          </q-card-section>
          <q-card-section class="text-h1 text-center text-weight-bold">
            640
          </q-card-section>
        </q-card>
      </div>
      <q-card class="q-ma-xs" style="width: 330px">
        <q-card-section class="text-h5 text-center"> High Hand </q-card-section>
        <q-card-section
          class="text-primary text-h3 text-center text-weight-bold"
        >
          Four of a kind
        </q-card-section>
        <q-card-section class="text-h4 text-center"> Jack High </q-card-section>
        <q-card-section class="text-center text-h4 text-accent">
          Bryan
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

export default {
  components: {
    BaseTimer,
  },
};
</script>
