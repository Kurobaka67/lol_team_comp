<template>
    <div class="d-flex flex-row main">
        <div class="champ-pool d-flex flex-column">
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

<script>
import ChampionsPoolService from '@/services/ChampionsPoolService';
import ChampionCard from '@/components/ChampionCard.vue';
import ChampionDetail from '@/components/ChampionDetail.vue';

export default {
    components: {
		ChampionCard,
        ChampionDetail
	},
    data() {
		return {
			championsTop: null,
            championsJungle: null,
            championsMid: null,
            championsAdc: null,
            championsSupport: null,
            championSelected: null
		}
	},
    mounted() {
        const championsPoolService = new ChampionsPoolService();
        championsPoolService.getChampionsTop().then(data => this.championsTop = data);
        championsPoolService.getChampionsJungle().then(data => this.championsJungle = data);
        championsPoolService.getChampionsMid().then(data => this.championsMid = data);
        championsPoolService.getChampionsAdc().then(data => this.championsAdc = data);
        championsPoolService.getChampionsSupport().then(data => this.championsSupport = data);
    },
    methods: {
        changeChampionDetail(champ) {
            this.championSelected = champ;
        }
    }
}
</script>