var instrument = Synth.createInstrument('piano');
var instrument1 = Synth.createInstrument('acoustic');
function setInstrumentMelody(s){
	instrument = Synth.createInstrument(s);
}
function setInstrumentChord(s){
	instrument1 = Synth.createInstrument(s);
}
function playNote(z, i){
	instrument.play(z, i, 1);
}
function playChord(a, b, c, d, i){
	instrument1.play(a, i, 0.6);
	instrument1.play(b, i, 0.6);
	instrument1.play(c, i, 0.6);
	instrument1.play(d, i, 0.6);
}
function playSong(theme, instr, instr1){
    var countChord = 0;
    setInstrumentMelody(instr);
    setInstrumentChord(instr1);
    var chordListBlues = [
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D']
];
	var chordListOriental = [
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['D', 'F', 'A', 'C'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D'],
['D', 'F', 'A', 'C'],
['A', 'C', 'E', 'G'],
['E', 'G', 'B', 'D']
];
	var seconds = 0;
		var cc = 0;
	    for(i = 0; i < result.length; i++){
	        for(j = 0; j < result[i].length; j++){
	        	if(result[i][j].length > 1){
	            	setTimeout(playNote, seconds, result[i][j].substring(0, 1), parseInt(result[i][j].substring(1, 2)));
	        	}
	            countChord++;
	            if(countChord%3==0){
	                if(theme==0)setTimeout(playChord, seconds, chordListBlues[cc][0], chordListBlues[cc][1], chordListBlues[cc][2], chordListBlues[cc++][3], 4);
	                else if(theme = 1)setTimeout(playChord, seconds, chordListOriental[cc][0], chordListOriental[cc][1], chordListOriental[cc][2], chordListOriental[cc++][3], 4);
	            }
	            cc %= 12;
	            seconds+=450;
	        }
	        countChord = 0;
	    }
}
playSong(0, 'piano', 'piano');