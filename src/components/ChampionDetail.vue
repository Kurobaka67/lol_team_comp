<script setup>
const props = defineProps(['champion']);
const getImgUrl = () => {
    return props.champion?`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${props.champion.id}.png`:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png";
}
const getGameChampion = () => {
    return props.champion?props.champion.game.join().toLowerCase():'?';
}
const getDamageChampion = () => {
    return props.champion?props.champion.damage.join().toLowerCase():'?';
}
const getRoleChampion = () => {
    return props.champion?props.champion.lane.join().toLowerCase():'?';
}
</script>

<template>
    <div class="d-flex flex-column" style="padding: 10px; position:fixed; width: 40%;">
        <div class="align-self-center">
            <img :src="getImgUrl()" alt="Icon" class="img-detail">
        </div>
        <p>Nom: {{ champion?champion.name:"?" }}</p>
        <p>Role: {{ getRoleChampion() }}</p>
        <p>Hard CC: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.hardCC?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Engage: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.hardEngage?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Disengage: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.disengage?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Poke: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.poke?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Wave clear: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.waveclear?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Tank: <span v-if="!champion">?</span><font-awesome-icon v-if="champion" :icon="champion.tank?['fas', 'check']:['fas', 'xmark']" /></p>
        <p>Dégats: {{ getDamageChampion() }}</p>
        <p>Phase: {{ getGameChampion() }}</p>
        
    </div>
</template>

<style scoped>
.img-detail{
    border-radius: 75%;
    width: 100px;
}
</style>