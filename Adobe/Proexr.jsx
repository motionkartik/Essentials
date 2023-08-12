var section = "Misc Section";
var pref = "Allow writing straight alpha into EXR";
var type = PREFType.PREF_Type_MACHINE_INDEPENDENT;

if(app.preferences.havePref(section, pref, type))
{
	if(app.preferences.getPrefAsBool(section, pref, type))
	{
		alert("EXR straight alpha pref already set to TRUE.");
	}
	else
	{
		alert("EXR straight alpha pref was set to FALSE. Setting to TRUE.");
		
		app.preferences.savePrefAsBool(section, pref, true, type);
	}
}
else
{
	alert("EXR straight alpha pref not set. Setting to TRUE.");
	
	app.preferences.savePrefAsBool(section, pref, true, type);
}
