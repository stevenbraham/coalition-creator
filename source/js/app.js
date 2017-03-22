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
                vvd: new Party('Party for Freedom and Democracy', 'VVD', 'blue', 33),
                pvv: new Party('Party for Freedom', 'PVV', 'black', 20)
            },
            selectedParties: []
        }
    },
    components: {PartySelector}
});