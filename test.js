const fs = require('fs');
const mongoose = require('mongoose');

// console.log(files);
// // удаление файла
// fs.unlink('folder/file_delete.txt', (err) => {
// 	if (err) throw err; // не удалось удалить файл
// 	console.log('Файл успешно удалён');
// });
// // чтение папки
//
function start(fs) {
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
}

mongoose.connect('mongodb://localhost:27017/system.js', { useUnifiedTopology: true, useNewUrlParser: true });


module.exports = {
	start() {},
};
