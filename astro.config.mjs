import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/radash',
	outDir: './docs',
	site: 'https://zhifou.github.io/radash',
	build: {
		assets: 'static',
	},
	integrations: [
		starlight({
			title: 'Radash',
			social: {
				github: 'https://github.com/radash',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'getting-started', link: '/radash/guides/getting-started/' },
						{ label: 'installation', link: '/radash/guides/installation/' },
						{ label: 'core-concepts', link: '/radash/guides/core-concepts/' },
					],
				},
				{
					label: 'Array',
					items: [
						{ label: 'alphabetical', link: '/radash/guides/array/alphabetical/' },
						{ label: 'boil', link: '/radash/guides/array/boil/' },
						{ label: 'cluster', link: '/radash/guides/array/cluster/' },
						{ label: 'counting', link: '/radash/guides/array/counting/' },
						{ label: 'diff', link: '/radash/guides/array/diff/' },
						{ label: 'first', link: '/radash/guides/array/first/' },
						{ label: 'flat', link: '/radash/guides/array/flat/' },
						{ label: 'fork', link: '/radash/guides/array/fork/' },
						{ label: 'group', link: '/radash/guides/array/group/' },
						{ label: 'intersects', link: '/radash/guides/array/intersects/' },
						{ label: 'iterate', link: '/radash/guides/array/iterate/' },
						{ label: 'last', link: '/radash/guides/array/last/' },
						{ label: 'list', link: '/radash/guides/array/list/' },
						{ label: 'max', link: '/radash/guides/array/max/' },
						{ label: 'merge', link: '/radash/guides/array/merge/' },
						{ label: 'min', link: '/radash/guides/array/min/' },
						{ label: 'objectify', link: '/radash/guides/array/objectify/' },
						{ label: 'range', link: '/radash/guides/array/range/' },
						{ label: 'replace-or-append', link: '/radash/guides/array/replace-or-append/' },
						{ label: 'replace', link: '/radash/guides/array/replace/' },
						{ label: 'select', link: '/radash/guides/array/select/' },
						{ label: 'shift', link: '/radash/guides/array/shift/' },
						{ label: 'sift', link: '/radash/guides/array/sift/' },
						{ label: 'sort', link: '/radash/guides/array/sort/' },
						{ label: 'sum', link: '/radash/guides/array/sum/' },
						{ label: 'toggle', link: '/radash/guides/array/toggle/' },
						{ label: 'unique', link: '/radash/guides/array/unique/' },
						{ label: 'zip-to-object', link: '/radash/guides/array/zip-to-object/' },
						{ label: 'zip', link: '/radash/guides/array/zip/' },
					]
				},
				{
					label: 'Async',
					items: [
						{ label: 'all', link: '/radash/guides/async/all/' },
						{ label: 'defer', link: '/radash/guides/async/defer/' },
						{ label: 'guard', link: '/radash/guides/async/guard/' },
						{ label: 'map', link: '/radash/guides/async/map/' },
						{ label: 'parallel', link: '/radash/guides/async/parallel/' },
						{ label: 'reduce', link: '/radash/guides/async/reduce/' },
						{ label: 'retry', link: '/radash/guides/async/retry/' },
						{ label: 'sleep', link: '/radash/guides/async/sleep/' },
						{ label: 'tryit', link: '/radash/guides/async/tryit/' },
					]
				},
				{
					label: 'Curry',
					items: [
						{ label: 'chain', link: '/radash/guides/curry/chain/' },
						{ label: 'compose', link: '/radash/guides/curry/compose/' },
						{ label: 'debounce', link: '/radash/guides/curry/debounce/' },
						{ label: 'memo', link: '/radash/guides/curry/memo/' },
						{ label: 'partial', link: '/radash/guides/curry/partial/' },
						{ label: 'partob', link: '/radash/guides/curry/partob/' },
						{ label: 'proxied', link: '/radash/guides/curry/proxied/' },
						{ label: 'throttle', link: '/radash/guides/curry/throttle/' },
					]
				},
				{
					label: 'Number',
					items: [
						{ label: 'in-range', link: '/radash/guides/number/in-range/' },
						{ label: 'to-float', link: '/radash/guides/number/to-float/' },
						{ label: 'to-int', link: '/radash/guides/number/to-int/' },
					]
				},
				{
					label: 'Object',
					items: [
						{ label: 'assign', link: '/radash/guides/object/assign/' },
						{ label: 'clone', link: '/radash/guides/object/clone/' },
						{ label: 'construct', link: '/radash/guides/object/construct/' },
						{ label: 'crush', link: '/radash/guides/object/crush/' },
						{ label: 'get', link: '/radash/guides/object/get/' },
						{ label: 'invert', link: '/radash/guides/object/invert/' },
						{ label: 'keys', link: '/radash/guides/object/keys/' },
						{ label: 'listify', link: '/radash/guides/object/listify/' },
						{ label: 'lowerize', link: '/radash/guides/object/lowerize/' },
						{ label: 'map-entries', link: '/radash/guides/object/map-entries/' },
						{ label: 'map-keys', link: '/radash/guides/object/map-keys/' },
						{ label: 'map-values', link: '/radash/guides/object/map-values/' },
						{ label: 'omit', link: '/radash/guides/object/omit/' },
						{ label: 'pick', link: '/radash/guides/object/pick/' },
						{ label: 'set', link: '/radash/guides/object/set/' },
						{ label: 'shake', link: '/radash/guides/object/shake/' },
						{ label: 'upperize', link: '/radash/guides/object/upperize/' },
					]
				},
				{
					label: 'Random',
					items: [
						{ label: 'draw', link: '/radash/guides/random/draw/' },
						{ label: 'random', link: '/radash/guides/random/random/' },
						{ label: 'shuffle', link: '/radash/guides/random/shuffle/' },
						{ label: 'uid', link: '/radash/guides/random/uid/' },
					]
				},
				{
					label: 'Series',
					items: [
						{ label: 'series', link: '/radash/guides/series/series/' },
					]
				},
				{
					label: 'String',
					items: [
						{ label: 'camel', link: '/radash/guides/string/camel/' },
						{ label: 'capitalize', link: '/radash/guides/string/capitalize/' },
						{ label: 'dash', link: '/radash/guides/string/dash/' },
						{ label: 'pascal', link: '/radash/guides/string/pascal/' },
						{ label: 'snake', link: '/radash/guides/string/snake/' },
						{ label: 'template', link: '/radash/guides/string/template/' },
						{ label: 'title', link: '/radash/guides/string/title/' },
						{ label: 'trim', link: '/radash/guides/string/trim/' },
					]
				},
				{
					label: 'Typed',
					items: [
						{ label: 'is-array', link: '/radash/guides/typed/is-array/' },
						{ label: 'is-date', link: '/radash/guides/typed/is-date/' },
						{ label: 'is-empty', link: '/radash/guides/typed/is-empty/' },
						{ label: 'is-equal', link: '/radash/guides/typed/is-equal/' },
						{ label: 'is-float', link: '/radash/guides/typed/is-float/' },
						{ label: 'is-function', link: '/radash/guides/typed/is-function/' },
						{ label: 'is-int', link: '/radash/guides/typed/is-int/' },
						{ label: 'is-number', link: '/radash/guides/typed/is-number/' },
						{ label: 'is-object', link: '/radash/guides/typed/is-object/' },
						{ label: 'is-primitive', link: '/radash/guides/typed/is-primitive/' },
						{ label: 'is-promise', link: '/radash/guides/typed/is-promise/' },
						{ label: 'is-string', link: '/radash/guides/typed/is-string/' },
						{ label: 'is-symbol', link: '/radash/guides/typed/is-symbol/' },
					]
				},
			],
		}),
	],
});
