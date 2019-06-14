(function(global) {

    global.elven = function(form) {
    Wort = form
    WortLang = Wort.length
    Translated = ""
    ContinuedTranslated = ""
    ControlCons = 0
    ControlDiph = 0
    Prev = ""
    Curr = ""
    Next = ""
    WordStart = 1
    WordEnd = 0
    TypeSwitches = 0
    for (i = 0; i < WortLang; i++) {
        Curr = Wort.charAt(i)
        Next = Wort.charAt(i + 1)
        if (Prev == "" || Prev == " " || Prev == "-" || Prev == "'") {
            WordStart = 1
        }
        if (WordStart == 1) {
            TypeSwitches = CountTypeSwitches(Wort.substring(i, WortLang))
        }
        if (TypeSwitches > 0) {
            if ((Prev == "A" || Prev == "a" || Prev == "E" || Prev == "e" || Prev == "I" || Prev == "i" || Prev == "O" || Prev == "o" || Prev == "U" || Prev == "u" || Prev == "Y" || Prev == "y") && (Curr == "B" || Curr == "b" || Curr == "C" || Curr == "c" || Curr == "D" || Curr == "d" || Curr == "F" || Curr == "f" || Curr == "G" || Curr == "g" || Curr == "H" || Curr == "h" || Curr == "J" || Curr == "j" || Curr == "K" || Curr == "k" || Curr == "L" || Curr == "l" || Curr == "M" || Curr == "m" || Curr == "N" || Curr == "n" || Curr == "P" || Curr == "p" || Curr == "Q" || Curr == "q" || Curr == "R" || Curr == "r" || Curr == "S" || Curr == "s" || Curr == "T" || Curr == "t" || Curr == "V" || Curr == "v" || Curr == "W" || Curr == "w" || Curr == "X" || Curr == "x" || Curr == "Z" || Curr == "z")) {
                TypeSwitches = TypeSwitches - 1
            }
            if ((Curr == "A" || Curr == "a" || Curr == "E" || Curr == "e" || Curr == "I" || Curr == "i" || Curr == "O" || Curr == "o" || Curr == "U" || Curr == "u" || Curr == "Y" || Curr == "y") && (Prev == "B" || Prev == "b" || Prev == "C" || Prev == "c" || Prev == "D" || Prev == "d" || Prev == "F" || Prev == "f" || Prev == "G" || Prev == "g" || Prev == "H" || Prev == "h" || Prev == "J" || Prev == "j" || Prev == "K" || Prev == "k" || Prev == "L" || Prev == "l" || Prev == "M" || Prev == "m" || Prev == "N" || Prev == "n" || Prev == "P" || Prev == "p" || Prev == "Q" || Prev == "q" || Prev == "R" || Prev == "r" || Prev == "S" || Prev == "s" || Prev == "T" || Prev == "t" || Prev == "V" || Prev == "v" || Prev == "W" || Prev == "w" || Prev == "X" || Prev == "x" || Prev == "Z" || Prev == "z")) {
                TypeSwitches = TypeSwitches - 1
            }
        }
        if (TypeSwitches < 1) {
            WordEnd = 1
        }
        if (i == (WortLang)) {
            WordEnd = 1
        }
        switch (Curr) {
        case "A":
            Translated = "A";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Ei";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "Ae";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "a":
            Translated = "a";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "ei";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "ae";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "B":
            Translated = "Rd";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Sh";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "R";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "b":
            Translated = "rd";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "sh";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "r";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "C":
            Translated = "L";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "T";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "S";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "c":
            Translated = "l";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "t";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "s";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "D":
            Translated = "D";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "P";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "R";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "d":
            Translated = "d";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "p";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "r";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "E":
            Translated = "Ae";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Ae";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "I";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "e":
            Translated = "ae";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "ae";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "i";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "F":
            Translated = "R";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Th";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "S";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "f":
            Translated = "r";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "th";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "s";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "G":
            Translated = "Ndr";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "K";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "L";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "g":
            Translated = "ndr";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "k";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "l";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "H":
            Translated = "Nd";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "C";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "N";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "h":
            Translated = "nd";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "c";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "n";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "I":
            Translated = "O";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Ai";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "Ai";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "i":
            Translated = "o";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "ai";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "ai";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "J":
            Translated = "Z";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "B";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "N";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "j":
            Translated = "z";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "b";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "n";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "K":
            Translated = "J";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "C";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "L";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "k":
            Translated = "j";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "c";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "l";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "L":
            Translated = "L";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Jh";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "R";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "l":
            Translated = "l";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "jh";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "r";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "M":
            Translated = "St";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "T";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "S";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "m":
            Translated = "st";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "t";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "s";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "N":
            Translated = "L";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "B";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "L";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "n":
            Translated = "l";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "b";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "l";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "O":
            Translated = "Y";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "O";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "Ai";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "o":
            Translated = "y";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "o";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "ai";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "P":
            Translated = "D";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "V";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "R";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "p":
            Translated = "d";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "v";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "r";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "Q":
            Translated = "Z";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "C";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "N";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "q":
            Translated = "z";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "c";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "n";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "R":
            Translated = "S";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "V";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "S";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "r":
            Translated = "s";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "v";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "s";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "S":
            Translated = "R";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "M";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "R";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "s":
            Translated = "r";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "m";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "r";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "T":
            Translated = "R";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "S";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "R";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "t":
            Translated = "r";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "s";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "r";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "U":
            Translated = "E";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Ia";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "Ia";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "u":
            Translated = "e";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "ia";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "ia";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "V":
            Translated = "L";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "B";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "L";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "v":
            Translated = "l";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "b";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "l";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "W":
            Translated = "Rd";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "Sh";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "Rn";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "w":
            Translated = "rd";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "sh";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "rn";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "X":
            Translated = "Z";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "C";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "S";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "x":
            Translated = "z";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "c";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "s";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "Y":
            Translated = "Ei";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "O";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "Ia";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "y":
            Translated = "ei";
            ControlCons = 0;
            if (ControlDiph == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "o";
                ControlDiph = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "ia";
                ControlDiph = 1;
                break
            };
            ControlDiph = 1;
            break;
        case "Z":
            Translated = "J";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "C";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "R";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        case "z":
            Translated = "j";
            ControlDiph = 0;
            if (ControlCons == 1) {
                Translated = "";
                break
            };
            if (WordStart == 1) {
                Translated = "c";
                ControlCons = 1;
                break
            };
            if (WordEnd == 1) {
                Translated = "r";
                ControlCons = 1;
                break
            };
            ControlCons = 1;
            break;
        default:
            Translated = form.English.value.charAt(i);
            ControlCons = 0;
            ControlDiph = 0;
            TypeSwitches = 0;
        }
        ContinuedTranslated = ContinuedTranslated.concat(Translated)
        WordStart = 0
        WordEnd = 0
        Prev = Curr
    }
    return ContinuedTranslated;
};

function CountTypeSwitches(Rest) {
    Aktiv = ""
    Passiv = ""
    Anzahl = 0;
    Aktiv = Rest.charAt(0)
    if (Aktiv == "" || Aktiv == " " || Aktiv == "-" || Aktiv == "." || Aktiv == "," || Aktiv == ";" || Aktiv == "!" || Aktiv == "'" || Aktiv == "?") {
        return 0
    }
    for (j = 0; j < Rest.length; j++) {
        Aktiv = Rest.charAt(j)
        Passiv = Rest.charAt(j - 1)
        if ((Passiv == "A" || Passiv == "a" || Passiv == "E" || Passiv == "e" || Passiv == "I" || Passiv == "i" || Passiv == "O" || Passiv == "o" || Passiv == "U" || Passiv == "u" || Passiv == "Y" || Passiv == "y") && (Aktiv == "B" || Aktiv == "b" || Aktiv == "C" || Aktiv == "c" || Aktiv == "D" || Aktiv == "d" || Aktiv == "F" || Aktiv == "f" || Aktiv == "G" || Aktiv == "g" || Aktiv == "H" || Aktiv == "h" || Aktiv == "J" || Aktiv == "j" || Aktiv == "K" || Aktiv == "k" || Aktiv == "L" || Aktiv == "l" || Aktiv == "M" || Aktiv == "m" || Aktiv == "N" || Aktiv == "n" || Aktiv == "P" || Aktiv == "p" || Aktiv == "Q" || Aktiv == "q" || Aktiv == "R" || Aktiv == "r" || Aktiv == "S" || Aktiv == "s" || Aktiv == "T" || Aktiv == "t" || Aktiv == "V" || Aktiv == "v" || Aktiv == "W" || Aktiv == "w" || Aktiv == "X" || Aktiv == "x" || Aktiv == "Z" || Aktiv == "z")) {
            Anzahl = Anzahl + 1
        }
        if ((Aktiv == "A" || Aktiv == "a" || Aktiv == "E" || Aktiv == "e" || Aktiv == "I" || Aktiv == "i" || Aktiv == "O" || Aktiv == "o" || Aktiv == "U" || Aktiv == "u" || Aktiv == "Y" || Aktiv == "y") && (Passiv == "B" || Passiv == "b" || Passiv == "C" || Passiv == "c" || Passiv == "D" || Passiv == "d" || Passiv == "F" || Passiv == "f" || Passiv == "G" || Passiv == "g" || Passiv == "H" || Passiv == "h" || Passiv == "J" || Passiv == "j" || Passiv == "K" || Passiv == "k" || Passiv == "L" || Passiv == "l" || Passiv == "M" || Passiv == "m" || Passiv == "N" || Passiv == "n" || Passiv == "P" || Passiv == "p" || Passiv == "Q" || Passiv == "q" || Passiv == "R" || Passiv == "r" || Passiv == "S" || Passiv == "s" || Passiv == "T" || Passiv == "t" || Passiv == "V" || Passiv == "v" || Passiv == "W" || Passiv == "w" || Passiv == "X" || Passiv == "x" || Passiv == "Z" || Passiv == "z")) {
            Anzahl = Anzahl + 1
        }
        if ((Aktiv != "A" && Aktiv != "a" && Aktiv != "E" && Aktiv != "e" && Aktiv != "I" && Aktiv != "i" && Aktiv != "O" && Aktiv != "o" && Aktiv != "U" && Aktiv != "u" && Aktiv != "Y" && Aktiv != "y" && Aktiv != "B" && Aktiv != "b" && Aktiv != "C" && Aktiv != "c" && Aktiv != "D" && Aktiv != "d" && Aktiv != "F" && Aktiv != "f" && Aktiv != "G" && Aktiv != "g" && Aktiv != "H" && Aktiv != "h" && Aktiv != "J" && Aktiv != "j" && Aktiv != "K" && Aktiv != "k" && Aktiv != "L" && Aktiv != "l" && Aktiv != "M" && Aktiv != "m" && Aktiv != "N" && Aktiv != "n" && Aktiv != "P" && Aktiv != "p" && Aktiv != "Q" && Aktiv != "q" && Aktiv != "R" && Aktiv != "r" && Aktiv != "S" && Aktiv != "s" && Aktiv != "T" && Aktiv != "t" && Aktiv != "V" && Aktiv != "v" && Aktiv != "W" && Aktiv != "w" && Aktiv != "X" && Aktiv != "x" && Aktiv != "Z" && Aktiv != "z") || j == (Rest.length)) {
            return Anzahl;
            break
        }
    }
    return Anzahl
}

})(this);