var piano = Synth.createInstrument('piano');
function playNote(z, i){
	piano.play(z, i, 1);
}
function playChord(a, b, c, d, i){
	piano.play(a, i, 1);
	piano.play(b, i, 1);
	piano.play(c, i, 1);
	piano.play(d, i, 1);
}
setTimeout(playNote, 0, 'E', 4);
setTimeout(playNote, 1000, 'C', 4);
setTimeout(playNote, 4000, 'F', 4);
setTimeout(playNote, 5000, 'D', 4);