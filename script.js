var myStyles = [
	{
		width: 200,
		name: 'Barot Bellingham',
		color: '#268BD2'
	},
	{
		width: 230, 
		name: 'Hassum Harrod',
		color: '#536870'
	},
	{
		width: 220,
		name: 'Jennifer Jerome',
		color: '#595AB7'
	},
	{
		width: 290,
		name: 'Richard Tweed',
		color: '#D11C24'
	},
	{
		width: 236,
		name: 'Lorenzo Garcia',
		color: '#C61C6F'
	},
	{
		width: 230,
		name: 'Xhou Ta',
		color: '#738A05'
	}
];

d3.selectAll('.item')
	.data(myStyles)
	.enter().append('div')
	.classed('item', true)
	.text(function(d) {
		return d.name + '!';
	})
	.style({
		background: 'white'
	});