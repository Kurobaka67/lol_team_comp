<script setup>
import ChampionsService from '@/services/ChampionsService';
import ChampionCard from '@/components/ChampionCard.vue';
import ChampionDetail from '@/components/ChampionDetail.vue';
import { onMounted, ref, watch } from 'vue';

const championsService = new ChampionsService();
const champions = ref(null);
const championSelected = ref(null);
const expanded = ref(false);
const filter = ref({
    "name": "",
    "role": "",
    "damage": "",
    "game": "",
    "hardcc": false,
    "engage": false,
    "disengage": false,
    "poke": false,
    "waveClear": false,
    "tank": false
});
onMounted(() => {
    championsService.getChampions(filter.value).then(data => champions.value = data);
})
const changeChampionDetail = (champ) => {
    championSelected.value = champ;
}
const changeHardCc = () => {
    filter.value.hardcc=!filter.value.hardcc;
    championsService.getChampions(filter.value).then(data => champions.value = data);
}
const changeEngage = () => {
    filter.value.engage=!filter.value.engage;
    championsService.getChampions(filter.value).then(data => champions.value = data);
}
const changeDisengage = () => {
    filter.value.disengage=!filter.value.disengage;
    championsService.getChampions(filter.value).then(data => champions.value = data);
}
const changePoke = () => {
    filter.value.poke=!filter.value.poke;
    championsService.getChampions(filter.value).then(data => champions.value = data);
}
const changeWaveClear = () => {
    filter.value.waveClear=!filter.value.waveClear;
    championsService.getChampions(filter.value).then(data => champions.value = data);
}
const changeTank = () => {
    filter.value.tank=!filter.value.tank;
    championsService.getChampions(filter.value).then(data => champions.value = data);
}

watch(
    () => filter.value.name,
    (name) => {
        championsService.getChampions(filter.value).then(data => champions.value = data);
    }
)
watch(
    () => filter.value.role,
    (role) => {
        championsService.getChampions(filter.value).then(data => champions.value = data);
    }
)
watch(
    () => filter.value.damage,
    (damage) => {
        console.log(filter.value.damage)
        championsService.getChampions(filter.value).then(data => champions.value = data);
    }
)
watch(
    () => filter.value.game,
    (game) => {
        championsService.getChampions(filter.value).then(data => champions.value = data);
    }
)
</script>

<template>
    <div class="d-flex main">
        <div class="d-flex flex-column" style="width: 60%;">
            <div class="filter">
                <nav class="navbar navbar-expand-lg navbar-light filter-bar">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <div class="d-flex">
                                        <input class="form-control me-2" type="search" placeholder="Nom" v-model="filter.name">
                                    </div>
                                </li>
                                <li class="nav-item" style="padding-right: 10px;">
                                    <select class="form-select" v-model="filter.role" style="width: 150px;" >
                                        <option value="" selected>Role</option>
                                        <option value="top">Top</option>
                                        <option value="jungle">Jungle</option>
                                        <option value="mid">Mid</option>
                                        <option value="adc">Adc</option>
                                        <option value="support">Support</option>
                                    </select>
                                </li>
                                <li class="nav-item"  style="padding-right: 10px;">
                                    <select class="form-select" v-model="filter.damage" style="width: 150px;">
                                        <option value="" selected>Dégats</option>
                                        <option value="magical">Magique</option>
                                        <option value="physical">Physique</option>
                                        <option value="utility">Utilité</option>
                                        <option value="brut">Brut</option>
                                    </select>
                                </li>
                                <li class="nav-item"  style="padding-right: 10px;">
                                    <select class="form-select" v-model="filter.game" style="width: 150px;">
                                        <option value="" selected>Phases</option>
                                        <option value="early">Early</option>
                                        <option value="mid">Mid</option>
                                        <option value="late">Late</option>
                                    </select>
                                </li>
                            </ul>
                            <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" @click="expanded=!expanded">
                                <p>Plus de filtre <font-awesome-icon :icon="expanded?['fas', 'arrow-up']:['fas', 'arrow-down']" /></p>
                            </button>
                        </div>
                    </div>
                </nav>
                <div class="collapse" id="collapseExample">
                    <nav class="navbar navbar-expand-lg navbar-light filter-bar-options">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item" style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="hardcc" @click="changeHardCc">
                                            <label class="form-check-label" for="hardcc">Hard CC</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="engage" @click="changeEngage">
                                            <label class="form-check-label" for="engage">Engage</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="disengage" @click="changeDisengage">
                                            <label class="form-check-label" for="disengage">Disengage</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="poke" @click="changePoke">
                                            <label class="form-check-label" for="poke">Poke</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="waveclear" @click="changeWaveClear">
                                            <label class="form-check-label" for="waveclear">Wave clear</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="tank" @click="changeTank">
                                            <label class="form-check-label" for="tank">Tank</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="d-flex flex-wrap">
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

<style scoped>
.filter{
    margin: 5px;
    padding: 10px;
    border-width: 1px;
    border-style: solid solid solid solid;
    border-radius: 5px;
}

.filter-bar{
    background-color: var(--primary-color) !important;
    margin: 10px;
}

.filter-bar-options{
    background-color: var(--primary-color) !important;
    border-radius: 10px;
}
</style>