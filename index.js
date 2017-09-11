const scribble = require('scribbletune');
console.log(scribble.listChords());	
/*let hats = scribble.clip({
    notes: ['c4'],
    pattern: 'x___'.repeat(16),
    accentMap: 'x---x---x-x---x-'
});*/

const getriff = (note) => {
	return scribble.clip({
		notes: [note, 'g#3', 'a3'],
		pattern: 'x_xx'.repeat(4)
	});
};

let c = getriff('f#3');
let d = getriff('e3');
let e = getriff('d3');
let f = getriff('f#3');
 //notes: ['C#sixth', 'C#Sus2', 'DSus2', 'Bmin', 'ESus2', 'ASus2', 'Dmaj', 'C#min', 'Amaj'],
 //notes: ['c2', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3','b3','a3','g3','f3','d3','c3'],
scribble.midi(c.concat(d,e,f), 'hats.mid');