
		const checkPhone = () => {
			const formPhone = document.querySelectorAll('.form-phone');
			

			formPhone.forEach((elem) => {
				elem.addEventListener('input', (item) => {
					item.target.value = item.target.value.replace(/[^\+\d]|(.)\+/g, '');
				});
			});
		};

		export default checkPhone;