/**
 * Converts seconds into human readable time hh:mm:ss
 * @example
	formatSeconds(200);   // '00:03:20'
	formatSeconds(-200);  // '-00:03:20'
	formatSeconds(99999); // '27:46:39'
 * @param {Number} seconds
 * @return {String}
 */
function toHumanTime(seconds = 0) {
	const [hour, minute, second, sign] =
		seconds > 0
			? [seconds / 3600, (seconds / 60) % 60, seconds % 60, '']
			: [-seconds / 3600, (-seconds / 60) % 60, -seconds % 60, '-'];

	return (
		sign +
		[hour, minute, second]
			.map((v) => `${Math.floor(v)}`.padStart(2, '0'))
			.join(':')
	);
}

/**
 * Converts bytes to human readable unit.
 * Thank you Amir from StackOverflow.
 * @example
 * toHumanSize(48000)    // 46.88 kB
 * toHumanSize(8048000)  // 7.68 MB
 * @param {number} bytes
 * @return {string}
 */
function toHumanSize(bytes = 0) {
	const suffixes = ['B', 'kB', 'MB', 'GB', 'TB'];
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${suffixes[i]}`;
}

export { toHumanTime, toHumanSize };
