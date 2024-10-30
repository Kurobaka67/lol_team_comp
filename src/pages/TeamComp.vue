<script setup>
import TeamCompService from '@/services/TeamCompService';
import TeamAnalysis from '@/components/TeamAnalysis.vue';
import ChampionDetail from '@/components/ChampionDetail.vue';
import { onMounted, ref } from 'vue';

const championSelected = ref(null);
const teamComps = ref(null)
const teamCompService = new TeamCompService();

onMounted(() => {
    teamCompService.getCompositions().then(data => teamComps.value = data);
})
const changeChampionDetail = (champ) => {
    championSelected.value = champ;
}
</script>

<template>
    <div class="d-flex flex-row main">
        <div class="team-comp d-flex flex-column">
            <div v-for="compo in teamComps">
                <TeamAnalysis :compo="compo.name" v-on:showDetail="changeChampionDetail"></TeamAnalysis>
            </div>
        </div>
        <div style="width: 40%;">
            <ChampionDetail :champion="championSelected"></ChampionDetail>
        </div>
    </div>
</template>

<style scoped>
.team-comp{
  height: 100%;
  width: 60%;
}
</style>