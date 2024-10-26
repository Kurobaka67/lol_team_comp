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

    getChampions(filter) {
		return this._getAllChampions().then(d => {
			d.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				  }
				  if (a.name > b.name) {
					return 1;
				  }
				  return 0;
			});
			if(filter.name != ""){
				d = d.filter((c) => {
					return c.name.toLowerCase().includes(filter.name);
				});
			}
			if(filter.hardcc){
				d = d.filter((c) => {
					return c.hardCC == true;
				});
			}
			if(filter.engage){
				d = d.filter((c) => {
					return c.hardEngage == true;
				});
			}
			if(filter.dissengage){
				d = d.filter((c) => {
					return c.dissengage == true;
				});
			}
			if(filter.poke){
				d = d.filter((c) => {
					return c.poke == true;
				});
			}
			if(filter.waveClear){
				d = d.filter((c) => {
					return c.waveclear == true;
				});
			}
			if(filter.tank){
				d = d.filter((c) => {
					return c.tank == true;
				});
			}
			return d;
		});;
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