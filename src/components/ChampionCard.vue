<script setup>
const props = defineProps(['champion']);
const getImgUrl = () => {
    return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${props.champion.id}.png`;
}
</script>

<template>
    <div>
        <img :src="getImgUrl()" :alt="champion.name+' icon'" class="champ-icon" style="width: 100px; padding: 10px; ">
    </div>
</template>

<style scoped>
.champ-icon{
  border-radius: 25%;
  opacity: var(--opacity-image);
  transition: all .4s ease;
}

.champ-icon:hover{
    opacity: 1;
    transform: scale(1.2);
}
</style>