<template>
    <div>
        <img :src="getImgUrl()" :alt="champion.name+' icon'" style="width: 100px; padding: 10px;">
    </div>
</template>

<script>
export default {
    props: ['champion'],
    methods: {
        getImgUrl() {
            return "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/"+this.champion.id+".png";
        }
    }
}
</script>