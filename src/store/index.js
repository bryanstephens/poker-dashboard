import { reactive, readonly } from "vue";
import moment from "moment";
import constants from "components/constants";

const state = reactive({
  bigBlind: 0,
  smallBlind: 0,
  players: [],
  numPlayersOut: 0,
  highHand: {
    title: "-",
    pokerHandIndex: -1,
    qualifier: "",
    players: [],
  },
  firstFourOfAKind: {
    players: [],
  },
  startTime: null,
  endTime: null,
  timerDuration: null,
});

const checkForWin = function (router) {
  if (state.players.length - state.numPlayersOut <= 1) {
    let winnerIndex;
    state.players.filter((player, index) => {
      const playerStillIn = player.timeOut === -1;
      if (playerStillIn) {
        winnerIndex = index;
      }
      return playerStillIn;
    });
    state.players[winnerIndex].timeOut = moment.now() + 2;
    state.players[winnerIndex].rank = constants.playerRankTitles[0];
    state.endTime = moment.now();
    router.push("/gameOver");
  }
};

const actions = {
  markPlayerOut(index, router) {
    if (state.players[index].timeOut < 0) {
      state.numPlayersOut++;
      state.players[index].timeOut = moment.now();
      state.players[index].rank =
        constants.playerRankTitles[state.players.length - state.numPlayersOut];
      checkForWin(router);
    }
  },
};

const getters = {
  getPlayers() {
    return [...state.players];
  },
};

const mutations = {
  setPlayers(playerList) {
    state.players.splice(0, state.players.length);
    state.players.push(
      ...playerList.map((playerName) => {
        return {
          name: playerName,
          timeOut: -1,
          rank: "",
        };
      })
    );
  },
  setBigBlind(bigBlind) {
    state.bigBlind = bigBlind;
  },
  setSmallBlind(smallBlind) {
    state.smallBlind = smallBlind;
  },
  setTimerDuration(duration) {
    state.timerDuration = duration;
  },
  setStartTime(startTime) {
    state.startTime = startTime;
  },
};

export default {
  state: readonly(state),
  actions,
  getters,
  mutations,
};
