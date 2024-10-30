import ChampionsService from "./ChampionsService";

export default class TeamCompService {
    static _compo = null;

    _getAllCompo() {
        if(TeamCompService._compo == null) {
			return fetch('data/team_comp.json').then(res => res.json()).then(d => {
				TeamCompService._compo = d;
				return [...TeamCompService._compo];
			});
		} else {
			return new Promise((resolve) => {
				resolve([...TeamCompService._compo]);
			});
		}
    }

    getCompositions() {
        return this._getAllCompo();
    }

    getChampionsTopByCompo(compo) {
		return this._getAllCompo().then(d => {
            const r = d.filter((c) => c.name == compo);
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].top);
            return champs;
        });
	}

    getChampionsJungleByCompo(compo) {
        return this._getAllCompo().then(d => {
            const r = d.filter((c) => c.name == compo);
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].jungle);
            return champs;
        });
	}

    getChampionsMidByCompo(compo) {
		return this._getAllCompo().then(d => {
            const r = d.filter((c) => c.name == compo);
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].mid);
            return champs;
        });
	}

    getChampionsAdcByCompo(compo) {
		return this._getAllCompo().then(d => {
            const r = d.filter((c) => c.name == compo);
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].adc);
            return champs;
        });
	}

    getChampionsSupportByCompo(compo) {
		return this._getAllCompo().then(d => {
            const r = d.filter((c) => c.name == compo);
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].support);
            return champs;
        });
	}
}