'use strict';

class Logger {

	static levels = {
		trace: 1,
		debug: 2,
		info: 3,
		warn: 4,
		error: 5,
		critical:  6
	};

	/**
	 * Sets the default message formats, can be overridden in the constructor.
	 * @type {{method: string, stackDepth: number, prefix: string, success: string, name: string, time: string, type: {warn: string, trace: string, debug: string, info: string}}}
	 */
	static default = {
		time: '{{time}}',
		name: '[{{name}}]',
		method: '[{{method}}]',
		prefix: '{{time}} {{type}} {{name}} {{method}}',
		type: {
			trace: '[trace]',
			debug: '[debug]',
			info: '[info]',
			warn: '[warn]'
		},
		success: '✓',
		stackDepth: 2
	}

	/**
	 * A easy override value, for coloured debugging, dont use this in production otherwise the escape codes are included in the crash reports.
	 * @type {{method: string, stackDepth: number, prefix: string, success: string, name: string, time: string, type: {warn: string, trace: string, debug: string, info: string}}}
	 */
	static debug = {
		time: '\x1b[35m{{time}}\x1b[0m',
		name: '\x1b[36m[{{name}}]\x1b[0m',
		method: '\x1b[1m[{{method}}]\x1b[0m',
		prefix: '{{time}} {{type}} {{name}} {{method}}',
		type: {
			trace: '\x1b[97m[trace]\x1b[0m',
			debug: '\x1b[32m[debug]\x1b[0m',
			info: '\x1b[33m[info]\x1b[0m',
			warn: '\x1b[31m[warn]\x1b[0m'
		},
		success: '\x1b[32m✓\x1b[0m',
		stackDepth: 2
	}

	/**
	 *
	 * @param level the logging level to be displayed, accepts a static, integer or string of the level.
	 * @param name the name of the logging item, generally the device.
	 * @param messages allows the default messages to be overridden.
	 */
	constructor(level, name = '', messages = Logger.default) {
		this.name = name;
		this.setLevel(level);
		this.messages = messages; // @todo change to an object merge.
	}

	/**
	 *
	 * @param name
	 */
	setName(name) {
		this.name = name;
	}

	/**
	 *
	 * @param level
	 */
	async setLevel(level) {
		try {
			if (typeof level === 'string') {
				level = Logger.levels[level];
			}

			// Only enter if the level has previously been set and we are changing it.
			if (this.level && level !== this.level) {
				this.info('The logging level has been changed from ' + this.level + ' to ' + level);
			}

			// @todo add check that value exists with in Logger Levels before setting it.
			this.level = level;
		} catch (e) {

			// @todo - console.error for the e - then throw our own exception?
			console.error('Undefined logging level value selected, all further logging is unlikely to work');
			throw e;
		}
	}

	/**
	 * Whether to enable colours
	 *
	 * You can disable it, but note it will return to the defaults.
	 * @param state
	 */
	setDebug(enabled) {
		this.messages = (enabled) ? Logger.debug : Logger.default;
	}

	/**
	 *
	 */
	trace() {
		if (Logger.levels.trace >= this.level) {
			this.type = this.messages.type.trace;
			this.output(...arguments);
		}
	}
	debug() {
		if (Logger.levels.debug >= this.level) {
			this.type = this.messages.type.debug;
			this.output( ...arguments);
		}
	}
	info() {
		if (Logger.levels.info >= this.level) {
			this.type = this.messages.type.info;
			this.output(...arguments);
		}
	}
	warn() {
		if (Logger.levels.warn >= this.level) {
			this.type = this.messages.type.warn;
			this.output(...arguments);
		}
	}
	log() {
		this.output( ...arguments)
	}

	output() {
		let prefix = this.parse();

		if (arguments.length > 0) {
			console.log(prefix, ' { \n', ...arguments, '\n' + '}');
		} else {
			console.log(prefix, this.messages.success);
		}
	}

	/**
	 * @todo add the ability to include a stack trace in the method name (stackDepth)
	 * @returns {string}
	 */
	parse() {
		let time = this.messages.time.replace('{{time}}', (Math.round(Date.now() / 100).toString()));
		let name =  this.messages.name.replace('{{name}}', this.name);
		let method =  this.messages.method.replace('{{method}}', ((new Error()).stack.split("\n")[4]).split(" ")[5].split('.')[1])


		return this.messages.prefix
			.replace('{{time}}', time)
			.replace('{{name}}', name)
			.replace('{{method}}', method)
			.replace('{{type}}', this.type);
	}

}

module.exports = Logger;
