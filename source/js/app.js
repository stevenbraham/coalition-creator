import Vue from "vue";
import VueStash from "vue-stash";
import Party from './lib/Party';
import PartySelector from "./components/PartySelector.vue";

Vue.use(VueStash);

new Vue({
    el: '#app',
    data: {
        store: {
            allParties: {
                VVD: new Party("Party for Freedom and Democracy", "VVD", "rgb(249, 126, 10)", 33),
                PVV: new Party("Party for Freedom", "PVV", "rgb(3, 55, 92)", 20),
                CDA: new Party("Christian Democratic Appeal", "CDA", "rgb(0, 123, 94)", 19),
                D66: new Party("Democrats 66", "D66", "rgb(0, 175, 50)", 19),
                GL: new Party("Greenleft", "GL", "rgb(77, 196, 0)", 14),
                SP: new Party("Socialist Party", "SP", "rgb(238, 46, 34)", 14),
                PVDA: new Party("Labour Party", "PVDA", "rgb(194, 0, 26)", 9),
                CU: new Party("Christian Union", "CU", "rgb(0, 167, 239)", 5),
                PvdD: new Party("Party for the Animals", "PvdD", "rgb(0, 108, 40)", 5),
                "50+": new Party("50 Plus", "50+", "rgb(147, 37, 147)", 4),
                SGP: new Party("Reformed Party", "SGP", "rgb(0, 73, 147)", 3),
                DENK: new Party("DENK", "DENK", "rgb(78, 190, 209)", 3),
                FvD: new Party("Forum for Democracy", "FvD", "rgb(95, 34, 26)", 2)
            },
            selectedParties: []
        }
    },
    components: {PartySelector}
});