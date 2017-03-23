<template>
    <ul class="party-selector">
        <li v-for="party in allParties" v-on:click="toggleParty(party.id)" :class="selectedParties.indexOf(party.id) != -1 ? 'active' : '' ">
            <img :src="`/images/parties/${party.id}.svg`" :alt="party.name"/>
        </li>
    </ul>
</template>
<script type="text/babel">
    export default{
        store: ['allParties', 'selectedParties'],
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {
            toggleParty: function (id) {
                let index = this.selectedParties.indexOf(id);
                if (index != -1) {
                    this.selectedParties.splice(index, 1);
                } else {
                    this.selectedParties.push(id);
                }
            }
        }
    }
</script>
