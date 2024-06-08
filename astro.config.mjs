import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/radash',
	trailingSlash: 'always',
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
						{ label: 'getting-started', link: '/guides/getting-started/' },
						{ label: 'installation', link: '/guides/installation/' },
						{ label: 'core-concepts', link: '/guides/core-concepts/' },
					],
				},
				{
					label: 'Array',
					items: [
						{ label: 'alphabetical', link: '/guides/array/alphabetical/' },
						{ label: 'boil', link: '/guides/array/boil/' },
						{ label: 'cluster', link: '/guides/array/cluster/' },
						{ label: 'counting', link: '/guides/array/counting/' },
						{ label: 'diff', link: '/guides/array/diff/' },
						{ label: 'first', link: '/guides/array/first/' },
						{ label: 'flat', link: '/guides/array/flat/' },
						{ label: 'fork', link: '/guides/array/fork/' },
						{ label: 'group', link: '/guides/array/group/' },
						{ label: 'intersects', link: '/guides/array/intersects/' },
						{ label: 'iterate', link: '/guides/array/iterate/' },
						{ label: 'last', link: '/guides/array/last/' },
						{ label: 'list', link: '/guides/array/list/' },
						{ label: 'max', link: '/guides/array/max/' },
						{ label: 'merge', link: '/guides/array/merge/' },
						{ label: 'min', link: '/guides/array/min/' },
						{ label: 'objectify', link: '/guides/array/objectify/' },
						{ label: 'range', link: '/guides/array/range/' },
						{ label: 'replace-or-append', link: '/guides/array/replace-or-append/' },
						{ label: 'replace', link: '/guides/array/replace/' },
						{ label: 'select', link: '/guides/array/select/' },
						{ label: 'shift', link: '/guides/array/shift/' },
						{ label: 'sift', link: '/guides/array/sift/' },
						{ label: 'sort', link: '/guides/array/sort/' },
						{ label: 'sum', link: '/guides/array/sum/' },
						{ label: 'toggle', link: '/guides/array/toggle/' },
						{ label: 'unique', link: '/guides/array/unique/' },
						{ label: 'zip-to-object', link: '/guides/array/zip-to-object/' },
						{ label: 'zip', link: '/guides/array/zip/' },
					]
				},
				{
					label: 'Async',
					items: [
						{ label: 'all', link: '/guides/async/all/' },
						{ label: 'defer', link: '/guides/async/defer/' },
						{ label: 'guard', link: '/guides/async/guard/' },
						{ label: 'map', link: '/guides/async/map/' },
						{ label: 'parallel', link: '/guides/async/parallel/' },
						{ label: 'reduce', link: '/guides/async/reduce/' },
						{ label: 'retry', link: '/guides/async/retry/' },
						{ label: 'sleep', link: '/guides/async/sleep/' },
						{ label: 'tryit', link: '/guides/async/tryit/' },
					]
				},
				{
					label: 'Curry',
					items: [
						{ label: 'chain', link: '/guides/curry/chain/' },
						{ label: 'compose', link: '/guides/curry/compose/' },
						{ label: 'debounce', link: '/guides/curry/debounce/' },
						{ label: 'memo', link: '/guides/curry/memo/' },
						{ label: 'partial', link: '/guides/curry/partial/' },
						{ label: 'partob', link: '/guides/curry/partob/' },
						{ label: 'proxied', link: '/guides/curry/proxied/' },
						{ label: 'throttle', link: '/guides/curry/throttle/' },
					]
				},
				{
					label: 'Number',
					items: [
						{ label: 'in-range', link: '/guides/number/in-range/' },
						{ label: 'to-float', link: '/guides/number/to-float/' },
						{ label: 'to-int', link: '/guides/number/to-int/' },
					]
				},
				{
					label: 'Object',
					items: [
						{ label: 'assign', link: '/guides/object/assign/' },
						{ label: 'clone', link: '/guides/object/clone/' },
						{ label: 'construct', link: '/guides/object/construct/' },
						{ label: 'crush', link: '/guides/object/crush/' },
						{ label: 'get', link: '/guides/object/get/' },
						{ label: 'invert', link: '/guides/object/invert/' },
						{ label: 'keys', link: '/guides/object/keys/' },
						{ label: 'listify', link: '/guides/object/listify/' },
						{ label: 'lowerize', link: '/guides/object/lowerize/' },
						{ label: 'map-entries', link: '/guides/object/map-entries/' },
						{ label: 'map-keys', link: '/guides/object/map-keys/' },
						{ label: 'map-values', link: '/guides/object/map-values/' },
						{ label: 'omit', link: '/guides/object/omit/' },
						{ label: 'pick', link: '/guides/object/pick/' },
						{ label: 'set', link: '/guides/object/set/' },
						{ label: 'shake', link: '/guides/object/shake/' },
						{ label: 'upperize', link: '/guides/object/upperize/' },
					]
				},
				{
					label: 'Random',
					items: [
						{ label: 'draw', link: '/guides/random/draw/' },
						{ label: 'random', link: '/guides/random/random/' },
						{ label: 'shuffle', link: '/guides/random/shuffle/' },
						{ label: 'uid', link: '/guides/random/uid/' },
					]
				},
				{
					label: 'Series',
					items: [
						{ label: 'series', link: '/guides/series/series/' },
					]
				},
				{
					label: 'String',
					items: [
						{ label: 'camel', link: '/guides/string/camel/' },
						{ label: 'capitalize', link: '/guides/string/capitalize/' },
						{ label: 'dash', link: '/guides/string/dash/' },
						{ label: 'pascal', link: '/guides/string/pascal/' },
						{ label: 'snake', link: '/guides/string/snake/' },
						{ label: 'template', link: '/guides/string/template/' },
						{ label: 'title', link: '/guides/string/title/' },
						{ label: 'trim', link: '/guides/string/trim/' },
					]
				},
				{
					label: 'Typed',
					items: [
						{ label: 'is-array', link: '/guides/typed/is-array/' },
						{ label: 'is-date', link: '/guides/typed/is-date/' },
						{ label: 'is-empty', link: '/guides/typed/is-empty/' },
						{ label: 'is-equal', link: '/guides/typed/is-equal/' },
						{ label: 'is-float', link: '/guides/typed/is-float/' },
						{ label: 'is-function', link: '/guides/typed/is-function/' },
						{ label: 'is-int', link: '/guides/typed/is-int/' },
						{ label: 'is-number', link: '/guides/typed/is-number/' },
						{ label: 'is-object', link: '/guides/typed/is-object/' },
						{ label: 'is-primitive', link: '/guides/typed/is-primitive/' },
						{ label: 'is-promise', link: '/guides/typed/is-promise/' },
						{ label: 'is-string', link: '/guides/typed/is-string/' },
						{ label: 'is-symbol', link: '/guides/typed/is-symbol/' },
					]
				},
			],
		}),
	],
});
