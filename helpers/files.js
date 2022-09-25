import fs from 'fs';

/**
 * create a new directory and nested directory if not exit, ignore existing directory
 * @param {String} dir the directory to be create
 * @returns {Void}
 */
function mkdir(dir = 'test') {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
}

export { mkdir };
