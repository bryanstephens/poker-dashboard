import { reactive, readonly } from 'vue';

const state = reactive({
    bigBlind: 2560,
    smallBlind: 1280,
    players: [
        {
            name: 'Bryan',
            timeOut: 500,
            rank: '2nd',
        },
        {
            name: 'Glenda',
            timeOut: -1,
            rank: '1st',
        },
    ],
    highHand: {
        title: 'Three of a kind',
        pokerHandIndex: 6,
        qualifier: 'Kings',
        players: ['Glenda'],
    },
    firstFourOfAKind: {
        players: ['Paolo']
    }
});

const getters = {
    getPlayers() {
        return [...state.players];
    }
}

const store = {
    state: readonly(state),
    getters,
};

export default store;