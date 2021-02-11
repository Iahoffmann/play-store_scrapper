import { app, search, developer, IAppItem } from 'google-play-scraper';
import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import stringify from 'csv-stringify/lib/sync';
import { type } from 'os';

export type NameAppRecord = {
	name: string,
	apps: IAppItem[]
}

export class Indexer {
	onlyUnique(value: any, index: any, self: string | any[]): boolean {
		return self.indexOf(value) === index;
	}

	async readCompanyNames(): Promise<string[]> {
		const buffer = await fs.promises.readFile('src/input/test.csv');
		return parse(buffer);
	}

	async writeAppOutPut(records: NameAppRecord[]) {
		records.map(async record => {
			
		})
	}

	async searchByCompanyNames(names: string[]): Promise<NameAppRecord[]> {
		const searches = names.map(async name => {
			const apps = await search({term: name});
			return {
				name: name,
				apps: apps
			} as NameAppRecord;
		});
		return await Promise.all(searches);
	}

	filterForDeveloper(records: NameAppRecord[]): string[] {
		return records.map(x => x.apps)
					.reduce((acc, val) => acc.concat(val), [])
					.map(x => x.developer)
					.filter(this.onlyUnique);
	}

	async searchByDeveloper(devNames: string[]): Promise<NameAppRecord[]> {
		const searches = devNames.map(async devName => {
			const apps = await developer({devId: devName})

			return {
				name: devName,
				apps: apps
			}
		});
		return await Promise.all(searches);
	}
}

fs.promises.readFile('src/input/test.csv').then(x => {
	const companyNames = parse(x);
	companyNames.map( (companyName: string) => {
		search({term: companyName, num: 10}).then(appItem => {
			const searches = appItem.filter(onlyUnique).map(val => {
				return app({appId: val.appId}).then((app) => {
					
					const x = {
						appName: `${app.title}`,
						developerName: `${app.developer}`,
						reviewCount: `${app.reviews}`,
						score: `${app.score}`,
					};

					return stringify([x], {columns: ['appName', 'developerName', 'reviewCount', 'score']})
				}, console.log)
			});

			searches.forEach((search) => {
				search.then(x => {
					console.log(x)
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					fs.appendFile('src/output/test.csv', x as string, error => {});
				});
			});
		});
	})
});