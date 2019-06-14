(function(global) {
   global.quor = function(form) { 
Translated = ""
ContinuedTranslated = ""
ControlCons=0
AddCons=""
ControlDiph=0
Prev=""
Next=""
for (i =0 ; i < form.length; i++)
{
   Next = form.charAt(i)
   switch(Next)
   {case "A": Translated = "A"; ControlCons=0;AddCons="";ControlDiph=2;
   break;
   case "a": Translated = "a"; ControlCons=0;AddCons=""; if (ControlDiph!=0){Translated=""}; ControlDiph=2;
   break;
   case "B": Translated = "H"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "b": Translated = "h"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "C": Translated = "K"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="h";ControlDiph=0
   break;
   case "c": Translated = "k"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="h";ControlDiph=0
   break;
   case "D": Translated = "K"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "d": Translated = "l"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="k";ControlDiph=0; if (i==0||Prev==" "){Translated = "k"; AddCons="";}
   break;
   case "E": Translated = "A"; ControlCons=0;AddCons="";ControlDiph=2;
   break;
   case "e": Translated = "a"; ControlCons=0;AddCons=""; if (ControlDiph!=0){Translated=""}; ControlDiph=2;
   break;
   case "F": Translated = "N"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="h";ControlDiph=0;
   break;
   case "f": Translated = "n"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="h";ControlDiph=0;
   break;
   case "G": Translated = "P"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "g": Translated = "p"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "H": Translated = "D"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "h": Translated = "d"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "I": Translated = "A"; ControlCons=0;AddCons="";ControlDiph=2;
   break;
   case "i": Translated = "a";  if (ControlDiph!=0){Translated=""}; ControlDiph=2;ControlCons=0;AddCons="";
   break;
   case "J": Translated = "K"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="r";ControlDiph=0;
   break;
   case "j": Translated = "k"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="r";ControlDiph=0;
   break;
   case "K": Translated = "T"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "k": Translated = "t"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "L": Translated = "R"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="ath";ControlDiph=0;
   break;
   case "l": Translated = "r"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="ath";ControlDiph=0;
   break;
   case "M": Translated = "Sh"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="t";ControlDiph=0;
   break;
   case "m": Translated = "sh"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="t";ControlDiph=0;
   break;
   case "N": Translated = "Th"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "n": Translated = "th"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "O": Translated = "E"; ControlCons=0;AddCons=""; ControlDiph="E";
   break;
   case "o": Translated = "e"; ControlCons=0;AddCons=""; if (ControlDiph!=0){Translated=""}; ControlDiph=1;
   break;
   case "P": Translated = "K"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="h";ControlDiph=0;
   break;
   case "p": Translated = "k"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="h";ControlDiph=0;
   break;
   case "Q": Translated = "Qu"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=0;AddCons="";ControlDiph=3
   break;
   case "q": Translated = "qu"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=0;AddCons="";ControlDiph=3
   break;
   case "R": Translated = "L"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="ath";ControlDiph=0;
   break;
   case "r": Translated = "l"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="ath";ControlDiph=0;
   break;
   case "S": Translated = "Sh"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="t";ControlDiph=0;
   break;
   case "s": Translated = "sh"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="t";ControlDiph=0;
   break;
   case "T": Translated = "Th"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "t": Translated = "th"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "U": Translated = "I"; ControlCons=0;AddCons=""; ControlDiph=1;
   break;
   case "u": Translated = "i"; ControlCons=0;AddCons=""; if (ControlDiph!=0&&ControlDiph!=2){Translated=""}; ControlDiph=1;
   break;
   case "V": Translated = "J"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "v": Translated = "j"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "W": Translated = "V"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "w": Translated = "v"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "X": Translated = "G"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "x": Translated = "g"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   case "Y": Translated = "O"; ControlCons=0;AddCons=""; ControlDiph=1;
   break;
   case "y": Translated = "o"; ControlCons=0;AddCons=""; if (ControlDiph!=0 && ControlDiph!=3){Translated=""}; ControlDiph=1;
   break;
   case "Z": Translated = "S"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;

   break;
   case "z": Translated = "s"; if (ControlCons==1){Translated=AddCons;AddCons="";ControlCons=1;AddCons="";break};ControlCons=1;AddCons="";ControlDiph=0;
   break;
   default: Translated = form.English.value.charAt(i);ControlCons=0;AddCons="";ControlDiph=0
}
   if (Next == Prev){Translated=""}
   ContinuedTranslated= ContinuedTranslated.concat(Translated) 
   Prev = Next
   
}
return ContinuedTranslated;
}

})(this);