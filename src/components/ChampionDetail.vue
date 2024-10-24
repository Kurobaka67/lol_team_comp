<template>
    <div class="d-flex flex-column" style="padding: 10px; position:fixed; width: 40%;">
        <div class="align-self-center">
            <img :src="getImgUrl()" alt="Icon" style="width: 100px;">
        </div>
        <p>Nom: {{ champion?champion.name:"?" }}</p>
        <p>Role: {{ getRoleChampion() }}</p>
        <p>Hard CC: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.hardCC?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Engage: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.hardEngage?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Disengage: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.dissengage?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Poke: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.poke?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Wave clear: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.waveclear?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Tank: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.tank?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Degats: {{ getDamageChampion() }}</p>
        <p>Game: {{ getGameChampion() }}</p>
        
    </div>
</template>

<script>

export default {
    props: ['champion'],
    methods: {
        getImgUrl() {
            return this.champion?"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/"+this.champion.id+".png":"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png";
        },
        getGameChampion() {
            return this.champion?this.champion.game.join().toLowerCase():'?';
        },
        getDamageChampion() {
            return this.champion?this.champion.damage.join().toLowerCase():'?';
        },
        getRoleChampion() {
            return this.champion?this.champion.lane.join().toLowerCase():'?';
        }
    }
}
</script>