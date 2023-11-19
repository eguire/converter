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
		let funcName = `${unitFrom.value}To${unitTo.value}`;

		if (operatedInput.value === '' || unitFrom.value === unitTo.value) {
			valueTo.value = operatedInput.value;
		} else {
			valueTo.value = (eval(funcName)(operatedInput)).toFixed(2);
		}
	};

	// Length

	function centimeterTometer(field) {
		return field.value / 100;
	};

	function meterTocentimeter(field) {
		return field.value * 100;
	};

	// Temperature

	function degreeCelsiusTofahrenheit(field) {
		return (field.value * (9 / 5)) + 32;
	};

	function fahrenheitTodegreeCelsius(field) {
		return (field.value - 32) * (5 / 9);
	};

	function degreeCelsiusTokelvin(field) {
		return +(field.value) + 273.15;
	};

	function kelvinTodegreeCelsius(field) {
		return field.value - 273.15;
	};

	function fahrenheitTokelvin(field) {
		return (field.value - 32) * (5 / 9) + 273.15;
	};

	function kelvinTofahrenheit(field) {
		return (field.value - 273.15) * (9 / 5) + 32;
	}
});