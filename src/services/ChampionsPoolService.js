import ChampionsService from "./ChampionsService";

export default class ChampionsPoolService {
    static _data = null;

    _getAllData() {
        if(ChampionsPoolService._data == null) {
			return fetch('data/champions_pool.json').then(res => res.json()).then(d => {
				ChampionsPoolService._data = d;
				return [...ChampionsPoolService._data];
			});
		} else {
			return new Promise((resolve) => {
				resolve([...ChampionsPoolService._data]);
			});
		}
    }

    getChampionsTop() {
		return this._getAllData().then(d => {
            const r = d.filter((g) => g.lane == "top");
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].champsId);
            return champs;
        });
	}

    getChampionsJungle() {
        return this._getAllData().then(d => {
            const r = d.filter((g) => g.lane == "jungle");
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].champsId);
            return champs;
        });
	}

    getChampionsMid() {
		return this._getAllData().then(d => {
            const r = d.filter((g) => g.lane == "mid");
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].champsId);
            return champs;
        });
	}

    getChampionsAdc() {
		return this._getAllData().then(d => {
            const r = d.filter((g) => g.lane == "adc");
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].champsId);
            return champs;
        });
	}

    getChampionsSupport() {
		return this._getAllData().then(d => {
            const r = d.filter((g) => g.lane == "support");
            const championsService = new ChampionsService();
		    const champs = championsService.getChampionsById(r[0].champsId);
            return champs;
        });
	}
}