<template>
    <div>
        <button v-for="party in allParties" v-on:click="addParty(party.abbreviation)">{{party.name}}</button>
        <ul>
            <li v-for="party in selectedParties">{{party9}}</li>
        </ul>
    </div>
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
            addParty: function (key) {
                this.selectedParties.push(key);
            }
        }
    }
</script>
