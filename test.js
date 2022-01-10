module.exports = {
	start(fs) {
		const files = fs.readdirSync('./');
		for (const file of files) {
			if (file != 'test.js') {
				if (!file.includes('.') && !file.endsWith('.js')) {
					console.log(`Папка ${file}`);
					const folder = fs.readdirSync(`./${file}`);
					for (const fileFolder of folder) {
						// console.log(`В папке находятся файл: ${fileFolder}`);
						fs.truncate(`./${file}/${fileFolder}`, (err) => {
							if (err) throw err; // не удалось очистить файл
							console.log(`${fileFolder} успешно очищен`);
						});
					}
				} else {
					fs.truncate(`./${file}`, (err) => {
						if (err) throw err; // не удалось очистить файл
						console.log(`${file} успешно очищен`);
					});
				}
			}
		}
	},
};
