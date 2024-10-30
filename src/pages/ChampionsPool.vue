<script setup>
import ChampionsPoolService from '@/services/ChampionsPoolService';
import ChampionCard from '@/components/ChampionCard.vue';
import ChampionDetail from '@/components/ChampionDetail.vue';
import { onMounted, ref } from 'vue';

const championsTop = ref(null);
const championsJungle = ref(null);
const championsMid = ref(null);
const championsAdc = ref(null);
const championsSupport = ref(null);
const championSelected = ref(null);
const championsPoolService = new ChampionsPoolService();

onMounted(() => {
    championsPoolService.getChampionsTop().then(data => championsTop.value = data);
    championsPoolService.getChampionsJungle().then(data => championsJungle.value = data);
    championsPoolService.getChampionsMid().then(data => championsMid.value = data);
    championsPoolService.getChampionsAdc().then(data => championsAdc.value = data);
    championsPoolService.getChampionsSupport().then(data => championsSupport.value = data);
})
const changeChampionDetail = (champ) => {
    championSelected.value = champ;
}
</script>

<template>
    <div class="d-flex flex-row main">
        <div class="champ-pool d-flex flex-column" style="height: 100%;">
            <h3>Top</h3>
            <div class="d-flex flex-row flex-wrap" style="width: 100%;">
                <div v-for="champion in championsTop" @click="changeChampionDetail(champion)">
                    <ChampionCard :champion="champion" ></ChampionCard>
                </div>
            </div>
            <h3>Jungle</h3>
            <div class="d-flex flex-row flex-wrap" style="width: 100%;">
                <div v-for="champion in championsJungle" @click="changeChampionDetail(champion)">
                    <ChampionCard :champion="champion" ></ChampionCard>
                </div>
            </div>
            <h3>Mid</h3>
            <div class="d-flex flex-row flex-wrap" style="width: 100%;">
                <div v-for="champion in championsMid" @click="changeChampionDetail(champion)">
                    <ChampionCard :champion="champion" ></ChampionCard>
                </div>
            </div>
            <h3>Adc</h3>
            <div class="d-flex flex-row flex-wrap" style="width: 100%;">
                <div v-for="champion in championsAdc" @click="changeChampionDetail(champion)">
                    <ChampionCard :champion="champion" ></ChampionCard>
                </div>
            </div>
            <h3>Support</h3>
            <div class="d-flex flex-row flex-wrap" style="width: 100%;">
                <div v-for="champion in championsSupport" @click="changeChampionDetail(champion)">
                    <ChampionCard :champion="champion" ></ChampionCard>
                </div>
            </div>
        </div>
        <div style="width: 40%;">
            <ChampionDetail :champion="championSelected"></ChampionDetail>
        </div>
    </div>
    

</template>

<style scoped>
.champ-pool{
  height: 100%;
  width: 60%;
}
</style>