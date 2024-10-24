export default class ChampionsService {
    static _champions = null;

    _getAllChampions() {
        if(ChampionsService._champions == null) {
			return fetch('data/champions.json').then(res => res.json()).then(d => {
				ChampionsService._champions = d;
				return [...ChampionsService._champions];
			});
		} else {
			return new Promise((resolve) => {
				resolve([...ChampionsService._champions]);
			});
		}
    }

    getChampions() {
		return this._getAllChampions();
	}

	getChampionsById(ids) {
		return this._getAllChampions().then(d => {
			var r = [];
			ids.forEach(id => {
				r.push(d.filter((c) => c.id == id)[0]);
			});
			console.log(r);
			return r;
		});
	}
}