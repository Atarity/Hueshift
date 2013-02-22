function alterHue(Hue,Sat,Light) {
    var desc9 = new ActionDescriptor();
    desc9.putBoolean( charIDToTypeID('Clrz'), false );
        var list2 = new ActionList();
            var desc10 = new ActionDescriptor();
            desc10.putInteger( charIDToTypeID('H   '), Hue );
            desc10.putInteger( charIDToTypeID('Strt'), Sat );
            desc10.putInteger( charIDToTypeID('Lght'), Light );
        list2.putObject( charIDToTypeID('Hst2'), desc10 );
    desc9.putList( charIDToTypeID('Adjs'), list2 );
    executeAction( charIDToTypeID('HStr'), desc9, DialogModes.NO );
};


var frame0 = app.activeDocument.layers[0];

for(var i=0; i<360; i++) {
	var layerName = "frame " + (i+1);
	var layerRef = frame0.duplicate();
	layerRef.name = layerName;
	app.activeDocument.activeLayer = layerRef;
	alterHue(i - 180 , 0,0);
};

frame0.remove();