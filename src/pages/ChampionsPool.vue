<template>
    <div class="d-flex flex-row main">
        <div class="champ-pool d-flex flex-row">
            <ul class="nav nav-tabs d-flex flex-column justify-content-evenly menu-bar">
                <li class="nav-item d-flex justify-content-center align-items-center menu-bar-item activate" @click="showTopChampions()">
                    Top
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center menu-bar-item" @click="showJungleChampions()">
                    Jungle
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center menu-bar-item" @click="showMidChampions()">
                    Mid
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center menu-bar-item" @click="showAdcChampions()">
                    ADC
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center menu-bar-item" @click="showSupportChampions()">
                    Support
                </li>
            </ul>
            <div class="d-flex flex-row flex-wrap" style="width: 100%;">
                <div v-for="champion in champions" @click="changeChampionDetail(champion)">
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
			champions: null,
            championSelected: null
		}
	},
    mounted() {
        this.showTopChampions();
    },
    methods: {
        changeChampionDetail(champ) {
            this.championSelected = champ;
        },
        showTopChampions(){
            const championsPoolService = new ChampionsPoolService();
            championsPoolService.getChampionsTop().then(data => this.champions = data);
        },
        showJungleChampions(){
            const championsPoolService = new ChampionsPoolService();
            championsPoolService.getChampionsJungle().then(data => this.champions = data);
        },
        showMidChampions(){
            const championsPoolService = new ChampionsPoolService();
            championsPoolService.getChampionsMid().then(data => this.champions = data);
        },
        showAdcChampions(){
            const championsPoolService = new ChampionsPoolService();
            championsPoolService.getChampionsAdc().then(data => this.champions = data);
        },
        showSupportChampions(){
            const championsPoolService = new ChampionsPoolService();
            championsPoolService.getChampionsSupport().then(data => this.champions = data);
        }
    }
}
</script>