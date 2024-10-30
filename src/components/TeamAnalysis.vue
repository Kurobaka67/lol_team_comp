<script setup>
import TeamCompService from '@/services/TeamCompService';
import ChampionCard from './ChampionCard.vue';
import { onMounted, ref } from 'vue';

const props = defineProps(['compo']);
const topChamps = ref(null);
const jungleChamps = ref(null);
const midChamps = ref(null);
const adcChamps = ref(null);
const supportChamps = ref(null);
const topChampSelected = ref(null);
const jungleChampSelected = ref(null);
const midChampSelected = ref(null);
const adcChampSelected = ref(null);
const supportChampSelected = ref(null);

const isMissingAP = ref(false);
const isMissingAD = ref(false);
const isMissingEarly = ref(false);
const isMissingMid = ref(false);
const isMissingLate = ref(false);
const isMissingCC = ref(false);
const isMissingEngage = ref(false);
const isMissingDisengage = ref(false);
const isMissingPoke = ref(false);
const isMissingWaveClear = ref(false);
const isMissingTank = ref(false);

const teamCompService = new TeamCompService();
const emit = defineEmits(['showDetail']);

onMounted(() => {
    teamCompService.getChampionsTopByCompo(props.compo).then(data => {
        topChamps.value = data;
        topChampSelected.value = data[data.length-1];
    });
    teamCompService.getChampionsJungleByCompo(props.compo).then(data => {
        jungleChamps.value = data;
        jungleChampSelected.value = data[data.length-1];
    });
    teamCompService.getChampionsMidByCompo(props.compo).then(data => {
        midChamps.value = data;
        midChampSelected.value = data[data.length-1];
    });
    teamCompService.getChampionsAdcByCompo(props.compo).then(data => {
        adcChamps.value = data;
        adcChampSelected.value = data[data.length-1];
    });
    teamCompService.getChampionsSupportByCompo(props.compo).then(data => {
        supportChamps.value = data;
        supportChampSelected.value = data[data.length-1];
        setMissingAP();
        setMissingAD();
        setMissingEarly();
        setMissingMid();
        setMissingLate();
    });
})
const showDetail = (champ) => {
    emit('showDetail', champ);
}
const changeTopSelectedChamp = (champ) => {
    topChampSelected.value = champ;
    setMissingAP();
    setMissingAD();
    setMissingEarly();
    setMissingMid();
    setMissingLate();
}
const changeJungleSelectedChamp = (champ) => {
    jungleChampSelected.value = champ;
    setMissingAP();
    setMissingAD();
    setMissingEarly();
    setMissingMid();
    setMissingLate();
}
const changeMidSelectedChamp = (champ) => {
    midChampSelected.value = champ;
    setMissingAP();
    setMissingAD();
    setMissingEarly();
    setMissingMid();
    setMissingLate();
}
const changeAdcSelectedChamp = (champ) => {
    adcChampSelected.value = champ;
    setMissingAP();
    setMissingAD();
    setMissingEarly();
    setMissingMid();
    setMissingLate();
}
const changeSupportSelectedChamp = (champ) => {
    supportChampSelected.value = champ;
    setMissingAP();
    setMissingAD();
    setMissingEarly();
    setMissingMid();
    setMissingLate();
}
const setMissingAP = () => {
    if(!topChampSelected.value.damage.includes("MAGICAL") && 
    !jungleChampSelected.value.damage.includes("MAGICAL") && 
    !midChampSelected.value.damage.includes("MAGICAL") && 
    !adcChampSelected.value.damage.includes("MAGICAL") && 
    !supportChampSelected.value.damage.includes("MAGICAL")){
        isMissingAP.value = true;
    }
    else{
        isMissingAP.value = false;
    }
}
const setMissingAD = () => {
    if(!topChampSelected.value.damage.includes("PHYSICAL") && 
    !jungleChampSelected.value.damage.includes("PHYSICAL") && 
    !midChampSelected.value.damage.includes("PHYSICAL") && 
    !adcChampSelected.value.damage.includes("PHYSICAL") && 
    !supportChampSelected.value.damage.includes("PHYSICAL")){
        isMissingAD.value = true;
    }
    else{
        isMissingAD.value = false;
    }
}
const setMissingEarly = () => {
    if(!topChampSelected.value.game.includes("EARLY") && 
    !jungleChampSelected.value.game.includes("EARLY") && 
    !midChampSelected.value.game.includes("EARLY") && 
    !adcChampSelected.value.game.includes("EARLY") && 
    !supportChampSelected.value.game.includes("EARLY")){
        isMissingAD.value = true;
    }
    else{
        isMissingAD.value = false;
    }
}
const setMissingMid = () => {
    if(!topChampSelected.value.game.includes("MID") && 
    !jungleChampSelected.value.game.includes("MID") && 
    !midChampSelected.value.game.includes("MID") && 
    !adcChampSelected.value.game.includes("MID") && 
    !supportChampSelected.value.game.includes("MID")){
        isMissingAD.value = true;
    }
    else{
        isMissingAD.value = false;
    }
}
const setMissingLate = () => {
    var number = 0;
    (!topChampSelected.value.game.includes("LATE"))??number++;
    (!jungleChampSelected.value.game.includes("LATE"))??number++;
    (!midChampSelected.value.game.includes("LATE"))??number++;
    (!adcChampSelected.value.game.includes("LATE"))??number++;
    (!supportChampSelected.value.game.includes("LATE"))??number++;
    console.log(number);
    number >= 2?isMissingAD.value = true:isMissingAD.value = false;
        
}
</script>

<template>
    <h2>{{props.compo}}</h2>
    <div class="d-flex flex-row">
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 50px;">
            <div v-for="champ in topChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championTop`" @click="changeTopSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Top</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 50px;">
            <div v-for="champ in jungleChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championJungle`" @click="changeJungleSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Jungle</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 50px;">
            <div v-for="champ in midChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championMid`" @click="changeMidSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Mid</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 50px;">
            <div v-for="champ in adcChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championAdc`" @click="changeAdcSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Adc</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 50px;">
            <div v-for="champ in supportChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championSupport`" @click="changeSupportSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Support</p>
        </div>
    </div>
    <div class="d-flex flex-row">
        <h3 style="padding-left: 50px; padding-right: 20px">Analyse : </h3>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingAP">- Manque de dégats magiques</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingAD">- Manque de dégats physiques</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingEarly">- Manque d'early game</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingMid">- Manque de mid game</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingLate">- Manque de late game</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingCC">- Manque de CC</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingEngage">- Manque d'engage</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingDisengage">- Manque de disengage</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingPoke">- Manque de poke</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingWaveClear">- Manque de wave clear</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingTank">- Manque de tank</p>
        </div>
    </div>
</template>