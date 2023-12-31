window.addEventListener("DOMContentLoaded", () => {

	const unitSelect = document.querySelector('.converter__select'),
				upperUnitSelect = document.querySelector('#converter__upper-select'),
				lowerUnitSelect = document.querySelector('#converter__lower-select'),
				upperInput = document.querySelector('#converter__upper-input'),
				lowerInput = document.querySelector('#converter__lower-input');
	const units = {
		length: [
			{ nauticalMile: 'Nautical Mile' },
			{ inch: 'Inch' },
			{ foot: 'Foot' },
			{ yard: 'Yard' },
			{ mile: 'Mile' },
			{ nanometer: 'Nanometer' },
			{ micrometers: 'Micrometers' },
			{ millimeter: 'Millimeter' },
			{ centimeter: 'Centimeter' },
			{ meter: 'Meter' },
			{ kilometer: 'Kilometer' }
		],
		mass: [
			{ ounce: 'Ounce' },
			{ pound: 'Pound' },
			{ stone: 'Stone' },
			{ usTon: 'US ton' },
			{ imperialTon: 'Imperial ton' },
			{ microgram: 'Microgram' },
			{ milligram: 'Milligram' },
			{ gram: 'Gram' },
			{ kilogram: 'Kilogram' },
			{ tonne: 'Tonne' }
		],
		temperature: [
			{ degreeCelsius: 'Degree Celsius' }, 
			{ fahrenheit: 'Fahrenheit' }, 
			{ kelvin: 'Kelvin' }
		],
		time: [
			{ nanosecond: 'Nanosecond' }, 
			{ microsecond: 'Microsecond' }, 
			{ millisecond: 'Millisecond' }, 
			{ second: 'Second' }, 
			{ minute: 'Minute' }, 
			{ hour: 'Hour' }, 
			{ day: 'Day' }, 
			{ week: 'Week' }, 
			{ month: 'Month' }, 
			{ calendarYear: 'Calendar Year' }, 
			{ decade: 'Decade' }, 
			{ century: 'Century' }
		]
	};

	unitSelect.addEventListener('input', () => {
		createNewOptions(upperUnitSelect);
		createNewOptions(lowerUnitSelect);
		
		countUnits(upperUnitSelect, lowerUnitSelect, upperInput, lowerInput);

		function createNewOptions(select) {
			select.innerHTML = '';

			units[unitSelect.value].forEach(element => {
				const newOption = document.createElement('option');
				newOption.setAttribute('value', `${Object.keys(element)}`);
				newOption.textContent = Object.values(element);
				select.append(newOption);
			});
		};
	});

	upperUnitSelect.addEventListener('input', () => {
		countUnits(upperUnitSelect, lowerUnitSelect, upperInput, lowerInput);
	});

	lowerUnitSelect.addEventListener('input', () => {
		countUnits(upperUnitSelect, lowerUnitSelect, upperInput, lowerInput);
	});

	upperInput.addEventListener('input', () => {
		countUnits(upperUnitSelect, lowerUnitSelect, upperInput, lowerInput);
	});

	lowerInput.addEventListener('input', () => {
		countUnits(lowerUnitSelect, upperUnitSelect, lowerInput, upperInput);
	});

	function countUnits(unitFrom, unitTo, operatedInput, valueTo) {
		let funcName = `${unitFrom.value}To${unitTo.value.split('').map((char, i) => i === 0 ? char.toUpperCase() : char).join('')}`; // Get function name from selects and capitalize first char after 'To'

		operatedInput.value = operatedInput.value.replace(/[^-.\d]/, ''); // Left only minus, digits and dot

		if (operatedInput.value === '' || unitFrom.value === unitTo.value) {
			valueTo.value = operatedInput.value;
		} else {
			valueTo.value = +eval(funcName)(operatedInput).toFixed(20);
		}
	};

	// Length

	function nauticalMileToInch(field) {
		return field.value * 72910;
	}

	function nauticalMileToFoot(field) {
		return field.value * 6076;
	}

	function nauticalMileToYard(field) {
		return field.value * 2025;
	}

	function nauticalMileToMile(field) {
		return field.value * 1.151;
	}

	function nauticalMileToNanometer(field) {
		return field.value * 1852000000000;
	}

	function nauticalMileToMicrometers(field) {
		return field.value * 1852000000;
	}

	function nauticalMileToMillimeter(field) {
		return field.value * 1852000;
	}

	function nauticalMileToCentimeter(field) {
		return field.value * 185200;
	}

	function nauticalMileToMeter(field) {
		return field.value * 1852;
	}

	function nauticalMileToKilometer(field) {
		return field.value * 1.852;
	}

	function inchToNauticalMile(field) {
		return field.value / 72910;
	}

	function inchToFoot(field) {
		return field.value / 12;
	}

	function inchToYard(field) {
		return field.value / 36;
	}

	function inchToMile(field) {
		return field.value / 63360;
	}

	function inchToNanometer(field) {
		return field.value * 25400000;
	}

	function inchToMicrometers(field) {
		return field.value * 25400;
	}

	function inchToMillimeter(field) {
		return field.value * 25.4;
	}

	function inchToCentimeter(field) {
		return field.value * 2.54;
	}

	function inchToMeter(field) {
		return field.value / 39.37;
	}

	function inchToKilometer(field) {
		return field.value / 39370;
	}

	function footToNauticalMile(field) {
		return field.value / 6076;
	}

	function footToInch(field) {
		return field.value * 12;
	}

	function footToYard(field) {
		return field.value / 3;
	}

	function footToMile(field) {
		return field.value / 5280;
	}

	function footToNanometer(field) {
		return field.value * 304800000;
	}

	function footToMicrometers(field) {
		return field.value * 304800;
	}

	function footToMillimeter(field) {
		return field.value * 304.8;
	}

	function footToCentimeter(field) {
		return field.value * 30.48;
	}

	function footToMeter(field) {
		return field.value / 3.281;
	}

	function footToKilometer(field) {
		return field.value / 3281;
	}

	function yardToNauticalMile(field) {
		return field.value / 2025;
	}

	function yardToInch(field) {
		return field.value * 36;
	}

	function yardToFoot(field) {
		return field.value * 3;
	}

	function yardToMile(field) {
		return field.value / 1760;
	}

	function yardToNanometer(field) {
		return field.value * 914400000;
	}

	function yardToMicrometers(field) {
		return field.value * 914400;
	}

	function yardToMillimeter(field) {
		return field.value * 914.4;
	}

	function yardToCentimeter(field) {
		return field.value * 91.44;
	}

	function yardToMeter(field) {
		return field.value / 1.094;
	}

	function yardToKilometer(field) {
		return field.value / 1094;
	}

	function mileToNauticalMile(field) {
		return field.value / 1.151;
	}

	function mileToInch(field) {
		return field.value * 63360;
	}

	function mileToFoot(field) {
		return field.value * 5280;
	}

	function mileToYard(field) {
		return field.value * 1760;
	}

	function mileToNanometer(field) {
		return field.value * 1609344000000;
	}

	function mileToMicrometers(field) {
		return field.value * 1609344000;
	}

	function mileToMillimeter(field) {
		return field.value * 1609344;
	}

	function mileToCentimeter(field) {
		return field.value * 160900;
	}

	function mileToMeter(field) {
		return field.value * 1609;
	}

	function mileToKilometer(field) {
		return field.value * 1.609;
	}

	function nanometerToNauticalMile(field) {
		return field.value / 1852000000000;
	}

	function nanometerToInch(field) {
		return field.value / 25400000;
	}

	function nanometerToFoot(field) {
		return field.value / 304800000;
	}

	function nanometerToYard(field) {
		return field.value / 914400000;
	}

	function nanometerToMile(field) {
		return field.value / 1609344000000;
	}

	function nanometerToMicrometers(field) {
		return field.value / 1000;
	}

	function nanometerToMillimeter(field) {
		return field.value / 1000000;
	}

	function nanometerToCentimeter(field) {
		return field.value / 10000000;
	}

	function nanometerToMeter(field) {
		return field.value / 1000000000;
	}

	function nanometerToKilometer(field) {
		return field.value / 1000000000000;
	}

	function micrometersToNauticalMile(field) {
		return field.value / 1852000000;
	}

	function micrometersToInch(field) {
		return field.value / 25400;
	}

	function micrometersToFoot(field) {
		return field.value / 304800;
	}

	function micrometersToYard(field) {
		return field.value / 914400;
	}

	function micrometersToMile(field) {
		return field.value / 1609344000;
	}

	function micrometersToNanometer(field) {
		return field.value * 1000;
	}

	function micrometersToMillimeter(field) {
		return field.value / 1000;
	}

	function micrometersToCentimeter(field) {
		return field.value / 10000;
	}

	function micrometersToMeter(field) {
		return field.value / 1000000;
	}

	function micrometersToKilometer(field) {
		return field.value / 1000000000;
	}

	function millimeterToNauticalMile(field) {
		return field.value / 1852000;
	}

	function millimeterToInch(field) {
		return field.value / 25.4;
	}

	function millimeterToFoot(field) {
		return field.value / 304.8;
	}

	function millimeterToYard(field) {
		return field.value / 914.4;
	}

	function millimeterToMile(field) {
		return field.value / 1609344;
	}

	function millimeterToNanometer(field) {
		return field.value * 1000000;
	}

	function millimeterToMicrometers(field) {
		return field.value * 1000;
	}

	function millimeterToCentimeter(field) {
		return field.value / 10;
	}

	function millimeterToMeter(field) {
		return field.value / 1000;
	}

	function millimeterToKilometer(field) {
		return field.value / 1000000;
	}

	function centimeterToNauticalMile(field) {
		return field.value / 185200;
	}

	function centimeterToInch(field) {
		return field.value / 2.54;
	}

	function centimeterToFoot(field) {
		return field.value / 30.48;
	}

	function centimeterToYard(field) {
		return field.value / 91.44;
	}

	function centimeterToMile(field) {
		return field.value / 160900;
	}

	function centimeterToNanometer(field) {
		return field.value * 10000000;
	}

	function centimeterToMicrometers(field) {
		return field.value * 10000;
	}

	function centimeterToMillimeter(field) {
		return field.value * 10;
	}

	function centimeterToMeter(field) {
		return field.value / 100;
	}

	function centimeterToKilometer(field) {
		return field.value / 100000;
	}

	function meterToNauticalMile(field) {
		return field.value / 1852;
	}

	function meterToInch(field) {
		return field.value * 39.37;
	}

	function meterToFoot(field) {
		return field.value * 3.281;
	}

	function meterToYard(field) {
		return field.value * 1.094;
	}

	function meterToMile(field) {
		return field.value / 1609;
	}

	function meterToNanometer(field) {
		return field.value * 1000000000;
	}

	function meterToMicrometers(field) {
		return field.value * 1000000;
	}

	function meterToMillimeter(field) {
		return field.value * 1000;
	}

	function meterToKilometer(field) {
		return field.value / 1000;
	}

	function meterToCentimeter(field) {
		return field.value * 100;
	}

	function kilometerToNauticalMile(field) {
		return field.value / 1.852;
	}

	function kilometerToInch(field) {
		return field.value * 39370;
	}

	function kilometerToFoot(field) {
		return field.value * 3281;
	}

	function kilometerToYard(field) {
		return field.value * 1094;
	}

	function kilometerToMile(field) {
		return field.value / 1.609;
	}

	function kilometerToNanometer(field) {
		return field.value * 1000000000000;
	}

	function kilometerToMicrometers(field) {
		return field.value * 1000000000;
	}

	function kilometerToMillimeter(field) {
		return field.value * 1000000;
	}

	function kilometerToCentimeter(field) {
		return field.value * 100000;
	}

	function kilometerToMeter(field) {
		return field.value * 1000;
	}

	// Mass

	function ounceToPound(field) {
		return field.value / 16;
	}

	function ounceToStone(field) {
		return field.value / 224;
	}

	function ounceToUsTon(field) {
		return field.value / 32000;
	}

	function ounceToImperialTon(field) {
		return field.value / 35840;
	}

	function ounceToMicrogram(field) {
		return field.value * 28349523.125;
	}

	function ounceToMilligram(field) {
		return field.value * 28350;
	}

	function ounceToGram(field) {
		return field.value * 28.35;
	}

	function ounceToKilogram(field) {
		return field.value / 35.274;
	}

	function ounceToTonne(field) {
		return field.value / 35270;
	}

	function poundToOunce(field) {
		return field.value * 16;
	}

	function poundToStone(field) {
		return field.value / 14;
	}

	function poundToUsTon(field) {
		return field.value / 2000;
	}

	function poundToImperialTon(field) {
		return field.value / 2240;
	}

	function poundToMicrogram(field) {
		return field.value * 453592370;
	}

	function poundToMilligram(field) {
		return field.value * 453600;
	}

	function poundToGram(field) {
		return field.value * 453.6;
	}

	function poundToKilogram(field) {
		return field.value / 2.205;
	}

	function poundToTonne(field) {
		return field.value / 2205;
	}

	function stoneToOunce(field) {
		return field.value * 224;
	}

	function stoneToPound(field) {
		return field.value * 14;
	}

	function stoneToUsTon(field) {
		return field.value / 142.9;
	}

	function stoneToImperialTon(field) {
		return field.value / 160;
	}

	function stoneToMicrogram(field) {
		return field.value * 5669904625;
	}

	function stoneToMilligram(field) {
		return field.value * 6.35e+6;
	}

	function stoneToGram(field) {
		return field.value * 6350;
	}

	function stoneToKilogram(field) {
		return field.value * 6.35;
	}

	function stoneToTonne(field) {
		return field.value / 157.5;
	}

	function usTonToOunce(field) {
		return field.value * 32000;
	}

	function usTonToPound(field) {
		return field.value * 2000;
	}

	function usTonToStone(field) {
		return field.value * 142.9;
	}

	function usTonToImperialTon(field) {
		return field.value / 1.12;
	}

	function usTonToMicrogram(field) {
		return field.value * 9.072e+11;
	}

	function usTonToMilligram(field) {
		return field.value * 9.072e+8;
	}

	function usTonToGram(field) {
		return field.value * 907200;
	}

	function usTonToKilogram(field) {
		return field.value * 907.2;
	}

	function usTonToTonne(field) {
		return field.value / 1.102;
	}

	function imperialTonToOunce(field) {
		return field.value * 35840;
	}

	function imperialTonToPound(field) {
		return field.value * 2240;
	}

	function imperialTonToStone(field) {
		return field.value * 160;
	}

	function imperialTonToUsTon(field) {
		return field.value * 1.12;
	}

	function imperialTonToMicrogram(field) {
		return field.value * 1.016e+12;
	}

	function imperialTonToMilligram(field) {
		return field.value * 1.016e+9;
	}

	function imperialTonToGram(field) {
		return field.value * 1.016e+6;
	}

	function imperialTonToKilogram(field) {
		return field.value * 1016;
	}

	function imperialTonToTonne(field) {
		return field.value * 1.016;
	}

	function microgramToOunce(field) {
		return field.value / 2.835e+7;
	}

	function microgramToPound(field) {
		return field.value / 4.536e+8;
	}

	function microgramToStone(field) {
		return field.value / 6.35e+9;
	}

	function microgramToUsTon(field) {
		return field.value / 9.072e+11;
	}

	function microgramToImperialTon(field) {
		return field.value / 1.016e+12;
	}

	function microgramToMilligram(field) {
		return field.value / 1000;
	}

	function microgramToGram(field) {
		return field.value / 1e+6;
	}

	function microgramToKilogram(field) {
		return field.value / 1e+9;
	}

	function microgramToTonne(field) {
		return field.value / 1e+12;
	}

	function milligramToOunce(field) {
		return field.value / 28350;
	}

	function milligramToPound(field) {
		return field.value / 453600;
	}

	function milligramToStone(field) {
		return field.value / 6.35e+6;
	}

	function milligramToUsTon(field) {
		return field.value / 9.072e+8;
	}

	function milligramToImperialTon(field) {
		return field.value / 1.016e+9;
	}

	function milligramToMicrogram(field) {
		return field.value * 1000;
	}

	function milligramToGram(field) {
		return field.value / 1000;
	}

	function milligramToKilogram(field) {
		return field.value / 1e+6;
	}

	function milligramToTonne(field) {
		return field.value / 1e+9;
	}

	function gramToOunce(field) {
		return field.value / 28.35;
	}

	function gramToPound(field) {
		return field.value / 453.6;
	}

	function gramToStone(field) {
		return field.value / 6350;
	}

	function gramToUsTon(field) {
		return field.value / 907200;
	}

	function gramToImperialTon(field) {
		return field.value / 1.016e+6;
	}

	function gramToMicrogram(field) {
		return field.value * 1e+6;
	}

	function gramToMilligram(field) {
		return field.value * 1000;
	}

	function gramToKilogram(field) {
		return field.value / 1000;
	}

	function gramToTonne(field) {
		return field.value / 1e+6;
	}

	function kilogramToOunce(field) {
		return field.value * 35.274;
	}

	function kilogramToPound(field) {
		return field.value * 2.205;
	}

	function kilogramToStone(field) {
		return field.value / 6.35;
	}

	function kilogramToUsTon(field) {
		return field.value / 907.2;
	}

	function kilogramToImperialTon(field) {
		return field.value / 1016;
	}

	function kilogramToMicrogram(field) {
		return field.value * 1e+9;
	}

	function kilogramToMilligram(field) {
		return field.value * 1e+6;
	}

	function kilogramToGram(field) {
		return field.value * 1000;
	}

	function kilogramToTonne(field) {
		return field.value / 1000;
	}

	function tonneToOunce(field) {
		return field.value * 35270;
	}

	function tonneToPound(field) {
		return field.value * 2205;
	}

	function tonneToStone(field) {
		return field.value * 157.5;
	}

	function tonneToUsTon(field) {
		return field.value * 1.102;
	}

	function tonneToImperialTon(field) {
		return field.value / 1.016;
	}

	function tonneToMicrogram(field) {
		return field.value * 1e+12;
	}

	function tonneToMilligram(field) {
		return field.value * 1e+9;
	}

	function tonneToGram(field) {
		return field.value * 1e+6;
	}

	function tonneToKilogram(field) {
		return field.value * 1000;
	}

	// Temperature

	function degreeCelsiusToFahrenheit(field) {
		return (field.value * (9 / 5)) + 32;
	}

	function fahrenheitToDegreeCelsius(field) {
		return (field.value - 32) * (5 / 9);
	}

	function degreeCelsiusToKelvin(field) {
		return +(field.value) + 273.15;
	}

	function kelvinToDegreeCelsius(field) {
		return field.value - 273.15;
	}

	function fahrenheitToKelvin(field) {
		return (field.value - 32) * (5 / 9) + 273.15;
	}

	function kelvinToFahrenheit(field) {
		return (field.value - 273.15) * (9 / 5) + 32;
	}

	// Time

	function nanosecondToMicrosecond(field) {
		return field.value / 1000;
	}

	function nanosecondToMillisecond(field) {
		return field.value / 1e+6;
	}

	function nanosecondToSecond(field) {
		return field.value / 1e+9;
	}

	function nanosecondToMinute(field) {
		return field.value / 6e+10;
	}

	function nanosecondToHour(field) {
		return field.value / 3.6e+12;
	}

	function nanosecondToDay(field) {
		return field.value / 8.64e+13;
	}

	function nanosecondToWeek(field) {
		return field.value / 6.048e+14;
	}

	function nanosecondToMonth(field) {
		return field.value / 2.628e+15;
	}

	function nanosecondToCalendarYear(field) {
		return field.value / 3.154e+16;
	}

	function nanosecondToDecade(field) {
		return field.value / 3.154e+17;
	}

	function nanosecondToCentury(field) {
		return field.value / 3.154e+18;
	}

	function microsecondToNanosecond(field) {
		return field.value * 1000;
	}

	function microsecondToMillisecond(field) {
		return field.value / 1000;
	}

	function microsecondToSecond(field) {
		return field.value / 1e+6;
	}

	function microsecondToMinute(field) {
		return field.value / 6e+7;
	}

	function microsecondToHour(field) {
		return field.value / 3.6e+9;
	}

	function microsecondToDay(field) {
		return field.value / 8.64e+10;
	}

	function microsecondToWeek(field) {
		return field.value / 6.048e+11;
	}

	function microsecondToMonth(field) {
		return field.value / 2.628e+12;
	}

	function microsecondToCalendarYear(field) {
		return field.value / 3.154e+13;
	}

	function microsecondToDecade(field) {
		return field.value / 3.154e+14;
	}

	function microsecondToCentury(field) {
		return field.value / 3.154e+15;
	}

	function millisecondToNanosecond(field) {
		return field.value * 1e+6;
	}

	function millisecondToMicrosecond(field) {
		return field.value * 1000;
	}

	function millisecondToSecond(field) {
		return field.value / 1000;
	}

	function millisecondToMinute(field) {
		return field.value / 60000;
	}

	function millisecondToHour(field) {
		return field.value / 3.6e+6;
	}

	function millisecondToDay(field) {
		return field.value / 8.64e+7;
	}

	function millisecondToWeek(field) {
		return field.value / 6.048e+8;
	}

	function millisecondToMonth(field) {
		return field.value / 2.628e+9;
	}

	function millisecondToCalendarYear(field) {
		return field.value / 3.154e+10;
	}

	function millisecondToDecade(field) {
		return field.value / 3.154e+11;
	}

	function millisecondToCentury(field) {
		return field.value / 3.154e+12;
	}

	function secondToNanosecond(field) {
		return field.value * 1e+9;
	}

	function secondToMicrosecond(field) {
		return field.value * 1e+6;
	}

	function secondToMillisecond(field) {
		return field.value / 1000;
	}

	function secondToMinute(field) {
		return field.value / 60;
	}

	function secondToHour(field) {
		return field.value / 3600;
	}

	function secondToDay(field) {
		return field.value / 86400;
	}

	function secondToWeek(field) {
		return field.value / 604800;
	}

	function secondToMonth(field) {
		return field.value / 2.628e+6;
	}

	function secondToCalendarYear(field) {
		return field.value / 3.154e+7;
	}

	function secondToDecade(field) {
		return field.value / 3.154e+8
	}

	function secondToCentury(field) {
		return field.value / 3.154e+9;
	}

	function minuteToNanosecond(field) {
		return field.value * 6e+10;
	}

	function minuteToMicrosecond(field) {
		return field.value * 6e+7;
	}

	function minuteToMillisecond(field) {
		return field.value * 60000;
	}

	function minuteToSecond(field) {
		return field.value * 60; 
	}

	function minuteToHour(field) {
		return field.value / 60;
	}

	function minuteToDay(field) {
		return field.value / 1440;
	}

	function minuteToWeek(field) {
		return field.value / 10080;
	}

	function minuteToMonth(field) {
		return field.value / 43800;
	}

	function minuteToCalendarYear(field) {
		return field.value / 525600;
	}

	function minuteToDecade(field) {
		return field.value / 5.256e+6;
	}

	function minuteToCentury(field) {
		return field.value / 5.256e+7;
	}

	function hourToNanosecond(field) {
		return field.value * 3.6e+12;
	}

	function hourToMicrosecond(field) {
		return field.value * 3.6e+9;
	}

	function hourToMillisecond(field) {
		return field.value * 3.6e+6;
	}

	function hourToSecond(field) {
		return field.value * 3600;
	}

	function hourToMinute(field) {
		return field.value * 60;
	}

	function hourToDay(field) {
		return field.value / 24;
	}

	function hourToWeek(field) {
		return field.value / 168;
	}

	function hourToMonth(field) {
		return field.value / 730;
	}

	function hourToCalendarYear(field) {
		return field.value / 8760;
	}

	function hourToDecade(field) {
		return field.value / 87600;
	}

	function hourToCentury(field) {
		return field.value / 876000;
	}

	function dayToNanosecond(field) {
		return field.value * 8.64e+13;
	}

	function dayToMicrosecond(field) {
		return field.value * 8.64e+10;
	}

	function dayToMillisecond(field) {
		return field.value * 8.64e+7;
	}

	function dayToSecond(field) {
		return field.value * 86400;
	}

	function dayToMinute(field) {
		return field.value * 1440;
	}

	function dayToHour(field) {
		return field.value * 24;
	}

	function dayToWeek(field) {
		return field.value / 7;
	}

	function dayToMonth(field) {
		return field.value / 30.417;
	}

	function dayToCalendarYear(field) {
		return field.value / 365;
	}

	function dayToDecade(field) {
		return field.value / 3650;
	}

	function dayToCentury(field) {
		return field.value / 36500;
	}

	function weekToNanosecond(field) {
		return field.value * 6.048e+14;
	}

	function weekToMicrosecond(field) {
		return field.value * 6.048e+11;
	}

	function weekToMillisecond(field) {
		return field.value * 6.048e+8;
	}

	function weekToSecond(field) {
		return field.value * 604800;
	}

	function weekToMinute(field) {
		return field.value * 10080;
	}

	function weekToHour(field) {
		return field.value * 168;
	}

	function weekToDay(field) {
		return field.value * 7;
	}

	function weekToMonth(field) {
		return field.value / 4.345; 
	}

	function weekToCalendarYear(field) {
		return field.value / 52.143;
	}

	function weekToDecade(field) {
		return field.value / 521.4;
	}

	function weekToCentury(field) {
		return field.value / 5214;
	}

	function monthToNanosecond(field) {
		return field.value * 2.628e+15;
	}

	function monthToMicrosecond(field) {
		return field.value * 2.628e+12;
	}

	function monthToMillisecond(field) {
		return field.value * 2.628e+9;
	}

	function monthToSecond(field) {
		return field.value * 2.628e+6;
	}

	function monthToMinute(field) {
		return field.value * 43800;
	}

	function monthToHour(field) {
		return field.value * 730;
	}

	function monthToDay(field) {
		return field.value * 30.417;
	}

	function monthToWeek(field) {
		return field.value * 4.345;
	}

	function monthToCalendarYear(field) {
		return field.value / 12;
	}

	function monthToDecade(field) {
		return field.value / 120;
	}

	function monthToCentury(field) {
		return field.value / 1200;
	}

	function calendarYearToNanosecond(field) {
		return field.value * 3.154e+16;
	}

	function calendarYearToMicrosecond(field) {
		return field.value * 3.154e+13;
	}

	function calendarYearToMillisecond(field) {
		return field.value * 3.154e+10;
	}

	function calendarYearToSecond(field) {
		return field.value * 3.154e+7;
	}

	function calendarYearToMinute(field) {
		return field.value * 525600;
	}

	function calendarYearToHour(field) {
		return field.value * 8760;
	}

	function calendarYearToDay(field) {
		return field.value * 365;
	}

	function calendarYearToWeek(field) {
		return field.value * 52.143;
	}

	function calendarYearToMonth(field) {
		return field.value * 12;
	}

	function calendarYearToDecade(field) {
		return field.value / 10;
	}

	function calendarYearToCentury(field) {
		return field.value / 100;
	}

	function decadeToNanosecond(field) {
		return field.value * 3.154e+17;
	}

	function decadeToMicrosecond(field) {
		return field.value * 3.154e+14;
	}

	function decadeToMillisecond(field) {
		return field.value * 3.154e+11;
	}

	function decadeToSecond(field) {
		return field.value * 3.154e+8;
	}

	function decadeToMinute(field) {
		return field.value * 5.256e+6;
	}

	function decadeToHour(field) {
		return field.value * 87600;
	}

	function decadeToDay(field) {
		return field.value * 3650;
	}

	function decadeToWeek(field) {
		return field.value * 521.4;
	}

	function decadeToMonth(field) {
		return field.value * 120;
	}

	function decadeToCalendarYear(field) {
		return field.value * 10;
	}

	function decadeToCentury(field) {
		return field.value / 10;
	}

	function centuryToNanosecond(field) {
		return field.value * 3.154e+18;
	}

	function centuryToMicrosecond(field) {
		return field.value * 3.154e+15;
	}

	function centuryToMillisecond(field) {
		return field.value * 3.154e+12;
	}

	function centuryToSecond(field) {
		return field.value * 3.154e+9;
	}

	function centuryToMinute(field) {
		return field.value * 5.256e+7;
	}

	function centuryToHour(field) {
		return field.value * 876000;
	}

	function centuryToDay(field) {
		return field.value * 36500;
	}

	function centuryToWeek(field) {
		return field.value * 5214;
	}

	function centuryToMonth(field) {
		return field.value * 1200;
	}

	function centuryToCalendarYear(field) {
		return field.value * 100;
	}

	function centuryToDecade(field) {
		return field.value * 10;
	}
});