<script setup>
import TeamCompService from '@/services/TeamCompService';
import ChampionCard from './ChampionCard.vue';
import { onMounted, ref } from 'vue';
import RuleEval from '@/runengine';

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

const evalAnswer = ref([]);

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

let ruleEval = new RuleEval();
ruleEval.addRule(
    (facts) =>
        !facts.top?.damage.includes("MAGICAL") &&
        !facts.jungle?.damage.includes("MAGICAL") &&
        !facts.mid?.damage.includes("MAGICAL") &&
        !facts.adc?.damage.includes("MAGICAL") &&
        !facts.support?.damage.includes("MAGICAL"),
    'Pas assez de dégats magiques'
);
ruleEval.addRule(
    (facts) =>
        !facts.top?.damage.includes("PHYSICAL") &&
        !facts.jungle?.damage.includes("PHYSICAL") &&
        !facts.mid?.damage.includes("PHYSICAL") &&
        !facts.adc?.damage.includes("PHYSICAL") &&
        !facts.support?.damage.includes("PHYSICAL"),
    'Pas assez de dégats physiques'
);
ruleEval.addRule(
    (facts) =>
        !facts.top?.game.includes("EARLY") &&
        !facts.jungle?.game.includes("EARLY") &&
        !facts.mid?.game.includes("EARLY") &&
        !facts.adc?.game.includes("EARLY") &&
        !facts.support?.game.includes("EARLY"),
    'Pas assez d\'early game'
);
ruleEval.addRule(
    (facts) =>
        !facts.top?.game.includes("MID") &&
        !facts.jungle?.game.includes("MID") &&
        !facts.mid?.game.includes("MID") &&
        !facts.adc?.game.includes("MID") &&
        !facts.support?.game.includes("MID"),
    'Pas assez de mid game'
);
ruleEval.addRule(
    (facts) => {
        var number = 0;
        if (!topChampSelected.value.game.includes("LATE")) number++;
        if (!jungleChampSelected.value.game.includes("LATE")) number++;
        if (!midChampSelected.value.game.includes("LATE")) number++;
        if (!adcChampSelected.value.game.includes("LATE")) number++;
        if (!supportChampSelected.value.game.includes("LATE")) number++;
        return number > 3;
    },
    'Pas assez de late game'
);
ruleEval.addRule(
    (facts) => {
        var number = 0;
        if (!topChampSelected.value.hardCC) number++;
        if (!jungleChampSelected.value.hardCC) number++;
        if (!midChampSelected.value.hardCC) number++;
        if (!adcChampSelected.value.hardCC) number++;
        if (!supportChampSelected.value.hardCC) number++;
        return number > 2;
    },
    'Pas assez de CC'
);
ruleEval.addRule(
    (facts) => {
        var number = 0;
        if (!topChampSelected.value.hardEngage) number++;
        if (!jungleChampSelected.value.hardEngage) number++;
        if (!midChampSelected.value.hardEngage) number++;
        if (!adcChampSelected.value.hardEngage) number++;
        if (!supportChampSelected.value.hardEngage) number++;
        return number > 3;
    },
    'Pas assez d\'engage'
);
ruleEval.addRule(
    (facts) =>
        !facts.top?.disengage &&
        !facts.jungle?.disengage &&
        !facts.mid?.disengage &&
        !facts.adc?.disengage &&
        !facts.support?.disengage,
    'Pas assez de disengage'
);
ruleEval.addRule(
    (facts) =>
        !facts.top?.poke &&
        !facts.jungle?.poke &&
        !facts.mid?.poke &&
        !facts.adc?.poke &&
        !facts.support?.poke,
    'Pas assez de poke'
);
ruleEval.addRule(
    (facts) =>
        !facts.top?.waveclear &&
        !facts.jungle?.waveclear &&
        !facts.mid?.waveclear &&
        !facts.adc?.waveclear &&
        !facts.support?.waveclear,
    'Pas assez de wave clear'
);
ruleEval.addRule(
    (facts) => {
        var number = 0;
        if (!topChampSelected.value.tank) number++;
        if (!jungleChampSelected.value.tank) number++;
        if (!midChampSelected.value.tank) number++;
        if (!adcChampSelected.value.tank) number++;
        if (!supportChampSelected.value.tank) number++;
        return number > 3;
    },
    'Pas assez de tank'
);

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
        evalRules();
    });
})
const showDetail = (champ) => {
    emit('showDetail', champ);
}
const changeTopSelectedChamp = (champ) => {
    topChampSelected.value = champ;
    evalRules();
}
const changeJungleSelectedChamp = (champ) => {
    jungleChampSelected.value = champ;
    evalRules();
}
const changeMidSelectedChamp = (champ) => {
    midChampSelected.value = champ;
    evalRules();
}
const changeAdcSelectedChamp = (champ) => {
    adcChampSelected.value = champ;
    evalRules();
}
const changeSupportSelectedChamp = (champ) => {
    supportChampSelected.value = champ;
    evalRules();
}
const evalRules = () => {
    const facts = {
        top: topChampSelected.value,
        jungle: jungleChampSelected.value ,
        mid: midChampSelected.value, 
        adc:adcChampSelected.value, 
        support: supportChampSelected.value
    }
    console.log(evalAnswer.value)
    evalAnswer.value = [];
    const answers = ruleEval.evalRules(facts);
    if (answers) {
        for(const answer of answers){
            console.log(`Rule: ${answer.rule} result: ${answer.result}`);
            console.log('hey');
            evalAnswer.value.push(answer.result);
        }
    }
}
</script>

<template>
    <h2>{{props.compo}}</h2>
    <div class="d-flex flex-row">
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 40px;">
            <div v-for="champ in topChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championTop`" @click="changeTopSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Top</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 40px;">
            <div v-for="champ in jungleChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championJungle`" @click="changeJungleSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Jungle</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 40px;">
            <div v-for="champ in midChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championMid`" @click="changeMidSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Mid</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 40px;">
            <div v-for="champ in adcChamps">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :name="`${props.compo}championAdc`" @click="changeAdcSelectedChamp(champ)" style="margin-top: 40px;" checked>
                    <label class="form-check-label" for="hardcc"><ChampionCard :champion="champ" @click="showDetail(champ)"></ChampionCard></label>
                </div>
            </div>
            <p>Icon Adc</p>
        </div>
        <div class="d-flex flex-column-reverse justify-content-end" style="padding-left: 40px;">
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
            <p style="font-size: 20px;" v-for="answer in evalAnswer">- {{ answer }}</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingPoke">- Pas assez de poke</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingWaveClear">- Pas assez de wave clear</p>
        </div>
        <div class="d-flex flex-column" style="color: red;">
            <p style="font-size: 20px;" v-if="isMissingTank">- Pas assez de tank</p>
        </div>
    </div>
</template>