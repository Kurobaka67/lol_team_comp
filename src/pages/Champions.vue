<script setup>
import ChampionsService from '@/services/ChampionsService';
import ChampionCard from '@/components/ChampionCard.vue';
import ChampionDetail from '@/components/ChampionDetail.vue';
import { onMounted, ref } from 'vue';

const champions = ref(null);
const championSelected = ref(null);
const expanded = ref(false);
onMounted(() => {
    const championsService = new ChampionsService();
    championsService.getChampions().then(data => champions.value = data);
})
const changeChampionDetail = (champ) => {
    championSelected.value = champ;
}
</script>

<template>
    <div class="d-flex">
        <div class="d-flex flex-column" style="width: 60%;">
            <div class="filter">
                <nav class="navbar navbar-expand-lg navbar-light filter-bar">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <div class="d-flex">
                                        <input class="form-control me-2" type="search" placeholder="Nom" aria-label="Search">
                                    </div>
                                </li>
                                <li class="nav-item" style="padding-right: 10px;">
                                    <select class="form-select" style="width: 150px;" >
                                        <option selected>Role</option>
                                        <option value="top">Top</option>
                                        <option value="jungle">Jungle</option>
                                        <option value="mid">Mid</option>
                                        <option value="adc">Adc</option>
                                        <option value="support">Support</option>
                                    </select>
                                </li>
                                <li class="nav-item"  style="padding-right: 10px;">
                                    <select class="form-select" style="width: 150px;">
                                        <option selected>Dégats</option>
                                        <option value="magique">Magique</option>
                                        <option value="physique">Physique</option>
                                        <option value="brut">Brut</option>
                                    </select>
                                </li>
                                <li class="nav-item"  style="padding-right: 10px;">
                                    <select class="form-select" style="width: 150px;">
                                        <option selected>Phases</option>
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
                                            <input class="form-check-input" type="checkbox" id="hardcc" value="hardcc">
                                            <label class="form-check-label" for="hardcc">Hard CC</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="engage" value="engage">
                                            <label class="form-check-label" for="engage">Engage</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="dissengage" value="dissengage">
                                            <label class="form-check-label" for="dissengage">Dissengage</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="poke" value="poke">
                                            <label class="form-check-label" for="poke">Poke</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="waveclear" value="waveclear">
                                            <label class="form-check-label" for="waveclear">Wave clear</label>
                                        </div>
                                    </li>
                                    <li class="nav-item"  style="padding-top: 8px; padding-left: 10px;">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="tank" value="tank">
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