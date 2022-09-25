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

export { toHumanTime };
