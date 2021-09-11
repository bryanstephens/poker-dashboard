<template>
  <q-page padding class="row justify-center">
    <!-- Total playingtime -->
    <q-card class="col-3 q-ma-xs">
      <q-card-section class="text-h5 bg-primary text-center text-white">
        Players
      </q-card-section>
      <q-list>
        <q-item>
          <q-item-section> Bryan </q-item-section>
          <q-item-section side> 1st </q-item-section>
        </q-item>
        <q-item>
          <q-item-section> Glenda </q-item-section>
          <q-item-section side> 2nd </q-item-section>
        </q-item>
        <q-item>
          <q-item-section> Will </q-item-section>
          <q-item-section side> 3rd </q-item-section>
        </q-item>
        <q-item>
          <q-item-section> Mike </q-item-section>
          <q-item-section side> 4th </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <div class="col-4">
      <q-card class="q-ma-xs">
        <q-card-section class="text-h5 bg-primary text-center text-white">
          High Hand
        </q-card-section>
        <q-card-section class="text-h4 text-center text-weight-bold">
          Four of a kind
        </q-card-section>
        <q-card-section class="text-h5 text-center"> Jack High </q-card-section>
        <q-card-section class="text-center text-h4 text-accent">
          Bryan
        </q-card-section>
      </q-card>
    </div>
    <div class="col-4 items-stretch q-ma-xs">
      <q-card class="q-mb-sm">
        <q-card-section class="text-h5 bg-primary text-center text-white">
          First Four of a Kind
        </q-card-section>
        <q-card-section class="text-h4 text-center text-weight-bold">
          Paolo
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
export default {};
</script>
