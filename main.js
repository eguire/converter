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
			{ nanometre: 'Nanometre' },
			{ micrometres: 'Micrometres' },
			{ millimetre: 'Millimetre' },
			{ centimeter: 'Centimeter' },
			{ meter: 'Meter' },
			{ kilometre: 'Kilometre' }
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
			valueTo.value = +(eval(funcName)(operatedInput)).toFixed(7);
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

	function nauticalMileToNanometre(field) {
		return field.value * 1852000000000;
	}

	function nauticalMileToMicrometres(field) {
		return field.value * 1852000000;
	}

	function nauticalMileToMillimetre(field) {
		return field.value * 1852000;
	}

	function nauticalMileToCentimeter(field) {
		return field.value * 185200;
	}

	function nauticalMileToMeter(field) {
		return field.value * 1852;
	}

	function nauticalMileToKilometre(field) {
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

	function inchToNanometre(field) {
		return field.value * 25400000;
	}

	function inchToMicrometres(field) {
		return field.value * 25400;
	}

	function inchToMillimetre(field) {
		return field.value * 25.4;
	}

	function inchToCentimeter(field) {
		return field.value * 2.54;
	}

	function inchToMeter(field) {
		return field.value / 39.37;
	}

	function inchToKilometre(field) {
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

	function footToNanometre(field) {
		return field.value * 304800000;
	}

	function footToMicrometres(field) {
		return field.value * 304800;
	}

	function footToMillimetre(field) {
		return field.value * 304.8;
	}

	function footToCentimeter(field) {
		return field.value * 30.48;
	}

	function footToMeter(field) {
		return field.value / 3.281;
	}

	function footToKilometre(field) {
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

	function yardToNanometre(field) {
		return field.value * 914400000;
	}

	function yardToMicrometres(field) {
		return field.value * 914400;
	}

	function yardToMillimetre(field) {
		return field.value * 914.4;
	}

	function yardToCentimeter(field) {
		return field.value * 91.44;
	}

	function yardToMeter(field) {
		return field.value / 1.094;
	}

	function yardToKilometre(field) {
		return field.value / 1094;
	}

	function centimeterToMeter(field) {
		return field.value / 100;
	};

	function meterToCentimeter(field) {
		return field.value * 100;
	};

	// Temperature

	function degreeCelsiusToFahrenheit(field) {
		return (field.value * (9 / 5)) + 32;
	};

	function fahrenheitToDegreeCelsius(field) {
		return (field.value - 32) * (5 / 9);
	};

	function degreeCelsiusToKelvin(field) {
		return +(field.value) + 273.15;
	};

	function kelvinToDegreeCelsius(field) {
		return field.value - 273.15;
	};

	function fahrenheitToKelvin(field) {
		return (field.value - 32) * (5 / 9) + 273.15;
	};

	function kelvinToFahrenheit(field) {
		return (field.value - 273.15) * (9 / 5) + 32;
	}
});