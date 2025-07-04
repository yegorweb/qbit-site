export const usePhoneInput = (id, getValue, setValue) => {
		var phoneInput = document.getElementById(id);

		var getInputNumbersValue = function (input) {
				// Return stripped input value — just numbers
				return getValue().replace(/\D/g, '');
		}

		var onPhonePaste = function (e) {
				var input = e.target,
						inputNumbersValue = getInputNumbersValue(input);
				var pasted = e.clipboardData || window.clipboardData;
				if (pasted) {
						var pastedText = pasted.getData('Text');
						if (/\D/g.test(pastedText)) {
								// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
								// formatting will be in onPhoneInput handler
								setValue(inputNumbersValue);
								return;
						}
				}
		}

		var onPhoneInput = function (e) {
				var input = e.target,
						inputNumbersValue = getInputNumbersValue(input),
						selectionStart = input.selectionStart,
						formattedInputValue = "";

				if (!inputNumbersValue) {
						return setValue("");
				}

				if (getValue().length != selectionStart) {
						// Editing in the middle of input, not last symbol
						if (e.data && /\D/g.test(e.data)) {
								// Attempt to input non-numeric symbol
								setValue(inputNumbersValue);
						}
						return;
				}

				if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
						if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
						var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
						formattedInputValue = setValue(firstSymbols + " ");
						if (inputNumbersValue.length > 1) {
								formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
						}
						if (inputNumbersValue.length >= 5) {
								formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
						}
						if (inputNumbersValue.length >= 8) {
								formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
						}
						if (inputNumbersValue.length >= 10) {
								formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
						}
				} else {
						formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
				}
				setValue(formattedInputValue);
		}
		var onPhoneKeyDown = function (e) {
				// Clear input after remove last symbol
				var inputValue = e.target.value.replace(/\D/g, '');
				if (e.keyCode == 8 && inputValue.length == 1) {
						e.target.value = "";
				}
		}
		phoneInput.addEventListener('keydown', onPhoneKeyDown);
		phoneInput.addEventListener('input', onPhoneInput, false);
		phoneInput.addEventListener('paste', onPhonePaste, false);
}