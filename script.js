const inputIfsc = document.querySelector('.input');
		const button = document.querySelector('.btn');
		let bankName = document.querySelector('.bank-name');
		let ifscCode = document.querySelector('.ifsc-code');
		let bankCode = document.querySelector('.bank-code');
		let branchName = document.querySelector('.branch-name');		
		let bankAddress = document.querySelector('.bank-address');
		let contactNumber = document.querySelector('.contact');
		const table = document.querySelector('table');

		const bankDetails = async (event) =>{
			event.preventDefault();
			const api = `https://ifsc.razorpay.com/${inputIfsc.value}`;

			try{
				let response = await fetch(api);
				if(!response.ok){
					throw new Error('not record found');
				}

				let result = await response.json();
				
				bankName.textContent = result.BANK;
				ifscCode.textContent = result.IFSC;
				bankCode.textContent = result.BANKCODE;
				contactNumber.textContent = result.CONTACT;
				branchName.textContent = result.BRANCH;				
				bankAddress.textContent = result.ADDRESS;

				table.style. display = "block";

				document.querySelector('input').value = "";
				
				
			} catch (error){
				console.error('Network Issue', error);
			}
		};

		button.addEventListener('click', bankDetails);