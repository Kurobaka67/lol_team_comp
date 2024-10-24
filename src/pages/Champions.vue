<template>
    <div class="d-flex">
        <div class="d-flex flex-wrap" style="width: 60%;">
            <div v-for="champion in champions" @click="changeChampionDetail(champion)">
                <ChampionCard :champion="champion" ></ChampionCard>
            </div>
        </div>
        <div style="width: 40%;">
            <ChampionDetail :champion="championSelected"></ChampionDetail>
        </div>
    </div>
</template>

<script>
import ChampionsService from '@/services/ChampionsService';
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
        const championsService = new ChampionsService();
		championsService.getChampions().then(data => this.champions = data);
    },
    methods: {
        changeChampionDetail(champ) {
            this.championSelected = champ;
        }
    }
}
</script>