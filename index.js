const { Illustration, Group, Shape, TAU, Ellipse } = Zdog;

const almonds = [{ x: 280, y: 45, scale: 1.6, rotate: -40 }];

const rounds = [{ x: 50, y: 185, scale: 1 }];

const lines = [
	{ x: 65, y: 210, rotate: 0 },
	{ x: 230, y: 40, rotate: 180 },
	{ x: 310, y: 230, rotate: 0 },
	{ x: 325, y: 105, rotate: 180 }
];

const rhomboids = [{ x: 340, y: 180, scale: 1.2 }];

const sparkles = [
	{ x: 85, y: 70, scale: 1.2 },
	{ x: 300, y: 75, scale: 1 }
];

const circles = {
	light: [
		{ x: 135, y: 60, scale: 1 },
		{ x: 260, y: 80, scale: 0.7 }
	],
	dark: [{ x: 335, y: 135, scale: 1.5 }]
};

const element = document.querySelector("svg");

const illustration = new Illustration({
	element
});

const groupEnvelope = new Group({
	addTo: illustration,
	translate: { z: -50 }
});

const groupLetter = new Group({
	addTo: illustration
});

const groupOverlay = new Group({
	addTo: illustration,
	translate: { z: 50 }
});

const groupDecorations = new Group({
	addTo: illustration,
	translate: {
		x: -190,
		y: -150,
		z: 100
	}
});

for (const { x, y, scale, rotate } of almonds) {
	new Shape({
		addTo: groupDecorations,
		color: "hsl(48 95% 76%)",
		path: [
			{ x: -10, y: 0 },
			{
				bezier: [
					{ x: -7, y: -4 },
					{ x: -4, y: -6 },
					{ x: 0, y: -6 }
				]
			},
			{
				bezier: [
					{ x: 4, y: -6 },
					{ x: 7, y: -4 },
					{ x: 10, y: 0 }
				]
			},
			{
				bezier: [
					{ x: 7, y: 4 },
					{ x: 4, y: 6 },
					{ x: 0, y: 6 }
				]
			},
			{
				bezier: [
					{ x: -4, y: 6 },
					{ x: -7, y: 4 },
					{ x: -10, y: 0 }
				]
			}
		],
		stroke: 4,
		fill: true,
		translate: { x: x - 9, y: y - 9 },
		rotate: { z: (rotate / 180) * Math.PI },
		scale
	});
}

for (const { x, y, scale } of rounds) {
	new Ellipse({
		addTo: groupDecorations,
		color: "hsl(48 95% 76%)",
		diameter: 15,
		stroke: 4,
		translate: { x, y },
		scale
	});
}

for (const { x, y, rotate } of lines) {
	const groupLines = new Group({
		addTo: groupDecorations,
		translate: { x, y },
		rotate: { z: (rotate / 180) * Math.PI }
	});

	new Shape({
		addTo: groupLines,
		color: "hsl(48 95% 76%)",
		path: [
			{ x: 0, y: 0 },
			{ x: 16, y: -18 }
		],
		stroke: 4
	});

	new Shape({
		addTo: groupLines,
		color: "hsl(48 95% 76%)",
		path: [
			{ x: 10, y: 0 },
			{ x: 16, y: -6.75 }
		],
		stroke: 4
	});
}

for (const { x, y, scale } of rhomboids) {
	new Shape({
		addTo: groupDecorations,
		color: "hsl(48 95% 76%)",
		path: [
			{ x: -8, y: 0 },
			{ x: 0, y: -8 },
			{ x: 8, y: 0 },
			{ x: 0, y: 8 }
		],
		stroke: 4,
		translate: { x, y },
		scale
	});
}

for (const { x, y, scale } of sparkles) {
	new Shape({
		addTo: groupDecorations,
		color: "hsl(48 95% 76%)",
		path: [
			{ x: -5, y: 0 },
			{
				arc: [
					{ x: 0, y: 0 },
					{ x: 0, y: -5 }
				]
			},
			{
				arc: [
					{ x: 0, y: 0 },
					{ x: 5, y: 0 }
				]
			},
			{
				arc: [
					{ x: 0, y: 0 },
					{ x: 0, y: 5 }
				]
			},
			{
				arc: [
					{ x: 0, y: 0 },
					{ x: -5, y: 0 }
				]
			}
		],
		stroke: 4,
		fill: true,
		translate: { x, y },
		scale
	});
}

for (const { x, y, scale } of circles.light) {
	new Shape({
		addTo: groupDecorations,
		color: "hsl(48 95% 76%)",
		stroke: 14 * scale,
		translate: { x, y }
	});
}

for (const { x, y, scale } of circles.dark) {
	new Shape({
		addTo: groupDecorations,
		color: "hsl(36 77% 49%)",
		stroke: 14 * scale,
		translate: { x, y }
	});
}

const groupDots = new Group({
	addTo: groupDecorations,
	translate: { x: 45, y: 135 }
});

new Shape({
	addTo: groupDots,
	color: "hsl(36 77% 49%)",
	path: [
		{ x: 5, y: -20 },
		{ x: 32, y: 0 },
		{ x: 5, y: 20 }
	],
	stroke: 4,
	fill: true
});

new Ellipse({
	addTo: groupDots,
	color: "hsl(36 77% 49%)",
	diameter: 50,
	stroke: 4,
	fill: true
});

for (let i = 0; i < 3; i++) {
	new Shape({
		addTo: groupDots,
		color: "hsl(48 100% 88%)",
		stroke: 7.5,
		translate: { x: (i - Math.floor(3 / 2)) * 11 }
	});
}

const groupLines = new Group({
	addTo: groupDecorations,
	translate: { x: 110, y: 230 }
});

for (let i = 0; i < 3; i++) {
	const x = i * 14;
	new Shape({
		addTo: groupLines,
		color: "hsl(36 77% 49%)",
		path: [
			{ x, y: 0 },
			{ x: x + 14, y: -16 }
		],
		stroke: 4
	});
}

new Shape({
	addTo: groupDecorations,
	color: "hsl(36 77% 49%)",
	path: [
		{ x: -15, y: 0 },
		{
			bezier: [
				{ x: -10, y: -7 },
				{ x: 10, y: -7 },
				{ x: 15, y: 0 }
			]
		},
		{
			bezier: [
				{ x: 10, y: 7 },
				{ x: -10, y: 7 },
				{ x: -15, y: 0 }
			]
		}
	],
	stroke: 10,
	fill: true,
	translate: { x: 245, y: 225 },
	rotate: { z: (-20 / 180) * Math.PI }
});

new Shape({
	addTo: groupEnvelope,
	color: "hsl(42 87% 55%)",
	path: [
		{ x: 0, y: -65 },
		{ x: 85, y: -15 },
		{ x: 85, y: 65 },
		{
			arc: [
				{
					x: 85,
					y: 85
				},
				{
					x: 65,
					y: 85
				}
			]
		},
		{ x: -65, y: 85 },
		{
			arc: [
				{
					x: -85,
					y: 85
				},
				{
					x: -85,
					y: 65
				}
			]
		},
		{ x: -85, y: -15 },
		{ x: 0, y: -65 }
	],
	stroke: 30,
	fill: true
});

new Shape({
	addTo: groupLetter,
	color: "hsl(48 100% 88%)",
	path: [
		{ x: 0, y: -45 },
		{ x: 59.5, y: -10 },
		{ x: 59.5, y: 45 },
		{
			arc: [
				{
					x: 59.5,
					y: 65
				},
				{
					x: 39.5,
					y: 65
				}
			]
		},
		{ x: -39.5, y: 65 },
		{
			arc: [
				{
					x: -59.5,
					y: 65
				},
				{
					x: -59.5,
					y: 45
				}
			]
		},
		{ x: -59.5, y: -10 },
		{ x: 0, y: -45 }
	],
	stroke: 28,
	fill: true
});

new Shape({
	addTo: groupLetter,
	color: "hsl(36 77% 49%)",
	path: [
		{ x: -26, y: -20 },
		{ x: 26, y: -20 }
	],
	stroke: 10
});

new Shape({
	addTo: groupLetter,
	color: "hsl(36 77% 49%)",
	path: [
		{ x: -18, y: 0 },
		{ x: 18, y: 0 }
	],
	stroke: 10
});

new Shape({
	addTo: groupOverlay,
	color: "hsl(42 87% 55%)",
	path: [
		{ x: -74.36474, y: -11 },
		{
			arc: [
				{ x: -74, y: -10 },
				{ x: -74, y: -10 }
			]
		},
		{ x: -74.5, y: 45 },
		{
			bezier: [
				{ x: -74.5, y: 64.1516 },
				{ x: -58.65151, y: 80 },
				{ x: -39.5, y: 80 }
			]
		},
		{ x: 39.5, y: 80 },
		{
			bezier: [
				{ x: 58.65249, y: 80 },
				{ x: 74.5, y: 64.1516 },
				{ x: 74.5, y: 45 }
			]
		},
		{ x: 74.5, y: -10 },
		{
			arc: [
				{ x: 74.5, y: 0 },
				{ x: 66.254368, y: 3.39371 }
			]
		},
		{ x: 6.754368, y: 33.39371 },
		{
			arc: [
				{ x: 0, y: 37 },
				{ x: -6.753632, y: 33.39371 }
			]
		},
		{ x: -66.253632, y: 3.39371 },
		{
			arc: [
				{ x: -74.364932, y: -3 },
				{ x: -74.364932, y: -11 }
			]
		}
	],
	stroke: 0,
	fill: true
});

illustration.rotate.z = (TAU / 64) * -1;
illustration.updateRenderGraph();

let direction = 1;
let value = 0;

let animate = requestAnimationFrame(function loop() {
	value += (0.001 + 0.03 * (1 - value)) * direction;
	groupLetter.translate.y = value * 40 * -1;
	illustration.scale = 1 + value * 0.1;
	illustration.translate.y = value * 15;
	illustration.rotate.z = ((value - 0.5) * TAU) / 32;

	if (value >= 1) {
		value = 1;
		direction = -1;
	} else if (value <= 0) {
		value = 0;
		direction = 1;
	}

	illustration.updateRenderGraph();
	animate = requestAnimationFrame(loop);
});
