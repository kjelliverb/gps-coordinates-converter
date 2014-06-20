var gpsCoordinateConverter = function() {

    function degreesMinutesSecondsToDecimal(degrees, minutes, seconds, direction) {

        var decimal = parseInt(degrees) + parseFloat(minutes/60) + parseFloat(seconds/(60*60));

    	if (direction == "S" || direction == "W") {
       		decimal = decimal * -1;
    	}

    	return decimal;
    }

    return {
        degreesMinutesSecondsToDecimal : degreesMinutesSecondsToDecimal
    };

}();