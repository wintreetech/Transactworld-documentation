// ------------------------- Loader Spiner
$(window).on("load", function () {
	setTimeout(function () {
		$(".loader").fadeOut();
		$(".loader-mask").fadeOut("slow");
	}, 1000);
});
/*=============== SHOW SIDEBAR ===============*/
/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
	const $toggle = $(`#${toggleId}`);
	const $sidebar = $(`#${sidebarId}`);
	const $header = $(`#${headerId}`);
	const $main = $(`#${mainId}`);
	if ($toggle.length && $sidebar.length && $header.length && $main.length) {
		$(document).on("click", `#${toggleId}`, () => {
			$sidebar.toggleClass("show-sidebar");
			$header.toggleClass("left-pd");
			$main.toggleClass("left-pd");
		});
	}
};
$(document).ready(function () {
	showSidebar("header-toggle", "sidebar", "header", "main");
});
/*=============== LINK ACTIVE ===============*/
$(document).ready(function () {
	// Event delegation to handle dynamically added links too
	$(document).on("click", ".sidebar__list a", function () {
		$(".sidebar__list a").removeClass("active-link");
		$(this).addClass("active-link");
	});
});
// ----------------- logo hide and show favicon logo
$(document).ready(function () {
	let isFullLogo = true;
	// Preferred event binding using .on()
	$(document).on("click", ".header__toggle", function () {
		const $fullLogo = $(".fully_logo");
		const $favLogo = $(".favicon_logo");
		if (isFullLogo) {
			$fullLogo.addClass("hide-anim");
			setTimeout(() => {
				$fullLogo.css("display", "none").removeClass("hide-anim");
				$favLogo.css("display", "flex").addClass("hide-anim");
				requestAnimationFrame(() => {
					$favLogo.removeClass("hide-anim");
				});
			}, 150);
		} else {
			$favLogo.addClass("hide-anim");
			setTimeout(() => {
				$favLogo.css("display", "none").removeClass("hide-anim");
				$fullLogo.css("display", "flex").addClass("hide-anim");
				requestAnimationFrame(() => {
					$fullLogo.removeClass("hide-anim");
				});
			}, 150);
		}
		isFullLogo = !isFullLogo;
	});
});
// --------------------- Drop down Open close
$(document).on("click", ".navbar-link", function (e) {
	e.preventDefault();
	var $this = $(this);
	var submenu = $this.next(".dropdown-data");
	$(".navbar-link").not($this).removeClass("active");
	$(".dropdown-data").not(submenu).removeClass("show");
	$this.toggleClass("active");
	submenu.toggleClass("show");
});
// --------------------- Drop down Open close getting,pack, condense,navbar
$(document).on("click", ".header__toggle", function () {
	const gettingLine = $(".getting-line");
	const pack = $(".pack");
	const condense = $(".condense");
	const navbarLink = $(".navbar-link");
	const isToggled = $(this).data("toggled") === true;
	if (!isToggled) {
		gettingLine.hide();
		pack.hide();
		condense.hide();
		navbarLink.css("justify-content", "center");
	} else {
		gettingLine.show();
		pack.show();
		condense.show();
		navbarLink.css("justify-content", "space-between");
	}
	$(this).data("toggled", !isToggled);
});
//------------------------- Get the elements ---90px close dropdown none
$(document).on("click", ".navbar-link", function () {
	const $faviconLogo = $(".favicon_logo");
	const $dropdownData = $(".dropdown-data");
	const isFaviconVisible = $faviconLogo.css("display") === "flex";
	$dropdownData.each(function () {
		$(this).css("display", isFaviconVisible ? "none" : "flex");
	});
});
//------------------------- Function to toggle .dropdown-data display on each navbar-link click
function toggleDropdown() {
	const $faviconLogo = $(".favicon_logo");
	const $dropdownData = $(".dropdown-data");
	const isFaviconVisible = $faviconLogo.css("display") === "flex";
	$dropdownData.each(function () {
		$(this).css("display", isFaviconVisible ? "none" : "flex");
	});
}
$(document).on("click", ".navbar-link", function () {
	toggleDropdown();
});
//------------------------- Drop down File structer
$(document).ready(function () {
	$("body").on("click", ".gx-struct-drop", function (e) {
		const $dropBtn = $(this);
		const $subMenu = $dropBtn.nextAll().filter(".gx-sub");
		if ($subMenu.length) {
			const isOpen = $subMenu.hasClass("show");
			$(".gx-sub.show").css({
				opacity: "0",
				transform: "translateY(-20px)",
				maxHeight: "0",
			});
			setTimeout(function () {
				$(".gx-sub.show").removeClass("show");
			}, parseInt("300", 10));
			if (!isOpen) {
				setTimeout(function () {
					$subMenu.addClass("show");
					void $subMenu[0].offsetWidth;
					$subMenu.css({
						opacity: "1",
						transform: "translateY(0)",
						maxHeight: $subMenu[0].scrollHeight + "px",
					});
				}, parseInt("310", 10));
			}
		}
	});
});
$(document).ready(function () {
	$("body").on("click", ".gx-struct-drop-under", function () {
		const $dropBtn = $(this);
		const $subMenu = $dropBtn.nextAll().filter(".gx-sub-under");
		if ($subMenu.length) {
			const isOpen = $subMenu.hasClass("show");
			$(".gx-sub-under.show").each(function () {
				$(this)
					.css({
						opacity: "0",
						transform: "translateY(-20px)",
						maxHeight: "0",
					})
					.removeClass("show");
			});
			if (!isOpen) {
				setTimeout(function () {
					$subMenu.addClass("show");
					void $subMenu[0].offsetWidth;
					$subMenu.css({
						opacity: "1",
						transform: "translateY(0)",
						maxHeight: $subMenu[0].scrollHeight + "px",
					});
				}, 10);
			}
		}
	});
});
$(document).ready(function () {
	$("body").on("click", ".gx-struct-drop-back", function () {
		const $dropBtn = $(this);
		const $subMenu = $dropBtn.nextAll().filter(".gx-sub-under-under");
		if ($subMenu.length) {
			const isOpen = $subMenu.hasClass("show");
			$(".gx-sub-under-under.show").each(function () {
				$(this)
					.css({
						opacity: "0",
						transform: "translateY(-20px)",
						maxHeight: "0",
					})
					.removeClass("show");
			});
			if (!isOpen) {
				setTimeout(function () {
					$subMenu.addClass("show");
					void $subMenu[0].offsetWidth;
					$subMenu.css({
						opacity: "1",
						transform: "translateY(0)",
						maxHeight: $subMenu[0].scrollHeight + "px",
					});
				}, 10);
			}
		}
	});
});
// ------------------------- nav acrtive
$(document).ready(function () {
	$(".hx-topic").click(function () {
		$(".hx-topic").removeClass("active");
		$(this).addClass("active");
	});
	//------------------------- Scroll-based activation
	const sections = [
		"introduction",
		"core_features",
		"file_structure",
		"file_starter",
		"customization",
	];
	$(window).on("scroll", function () {
		let scrollPosition = $(document).scrollTop();
		for (let i = 0; i < sections.length; i++) {
			let sectionId = sections[i];
			let section = $("#" + sectionId);
			if (section.length) {
				let offsetTop = section.offset().top - 200;
				let offsetBottom = offsetTop + section.outerHeight();
				if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
					$(".hx-topic").removeClass("active");
					$(`.hx-topic[href$="#${sectionId}"]`).addClass("active");
					break;
				}
			}
		}
	});
});
/*=============== DARK LIGHT THEME ===============*/
$(document).ready(function () {
	const themeButton = $("#theme-button");
	const darkTheme = "dark-theme";
	const iconTheme = "ri-sun-fill";
	const selectedTheme = localStorage.getItem("selected-theme");
	const selectedIcon = localStorage.getItem("selected-icon");
	const getCurrentTheme = () => {
		return $("body").hasClass(darkTheme) ? "dark" : "light";
	};
	const getCurrentIcon = () => {
		return themeButton.hasClass(iconTheme)
			? "ri-moon-clear-fill"
			: "ri-sun-fill";
	};
	if (selectedTheme) {
		$("body").toggleClass(darkTheme, selectedTheme === "dark");
		themeButton.toggleClass(iconTheme, selectedIcon === "ri-moon-clear-fill");
	}
	themeButton.on("click", function () {
		$("body").toggleClass(darkTheme);
		themeButton.toggleClass(iconTheme);
		localStorage.setItem("selected-theme", getCurrentTheme());
		localStorage.setItem("selected-icon", getCurrentIcon());
	});
});
// _navbar link
$(document).ready(function () {
	$(document).on("click", ".navbar-link", function (event) {
		event.preventDefault();
		const targetUrl = $(this).attr("href");
		window.location.href = targetUrl;
	});
});
// Full Screen Popup Box
$(".gx-full-card").on("click", function () {
	$(this).hide();
	$(this)
		.parent(".header-tools")
		.append(
			'<a href="javascript:void(0)" class="m-l-10 gx-full-card-close"><i class="ri-close-fill"></i></a>'
		);
	const cardWrapper = $(this).closest(".gx-card").parent();
	cardWrapper.addClass("gx-full-screen");
	setTimeout(() => {
		cardWrapper.addClass("active");
	}, 10);
	$(this)
		.closest(".gx-card")
		.parent()
		.parent()
		.append('<div class="gx-card-overlay show"></div>');
});
$("body").on("click", ".gx-card-overlay, .gx-full-card-close", function () {
	$(".gx-card").find(".gx-full-card-close").remove();
	$(".gx-card").find(".gx-full-card").show();
	const cardWrapper = $(".gx-card").parent();
	cardWrapper.removeClass("active");
	setTimeout(() => {
		cardWrapper.removeClass("gx-full-screen");
	}, 300);
	$(".gx-card-overlay").removeClass("show");
	setTimeout(() => {
		$(".gx-card-overlay").remove();
	}, 300);
});

// Custom JS - request -transactions
const paymentSelect = document.getElementById("paymentMethod");
const currencySelect = document.getElementById("currency");
const output = document.getElementById("jsonOutput");

const baseRequest = {
	memberId: "12345",
	orderId: "12345",
	channelId: "1234",
	customerDetails: {
		customerName: "devest",
		customerFirstName: "dev",
		customerLastName: "test",
		customerDOB: "01012000",
		customerPhone: "9874532150",
		customerEmail: "devtest@gmail.com",
		customerCC: "91",
	},
	shippingDetails: {
		shippingName: "dev test",
		shippingStreet: "street 1",
		shippingCity: "mumbai",
		shippingCountry: "IND",
		shippingZip: "400063",
		shippingPhone: "9874563210",
		shippingEmail: "devtest@gmail.com",
		shippingCC: "91",
	},
	payment: {
		paymentMethod: "",
		paymentBrand: "VISA",
		amount: "10.00",
		currency: "",
		card: {
			pan: "4444333322221111",
			expiryMonth: "12",
			expiryYear: "2025",
			cvv: "111",
		},
		wallet: {
			username: "dev@123",
			password: "asdfrgyh",
			walletId: "asd1233",
		},
		vpaAddress: "john.dave@okhdfcbank",
	},
	redirectUrl: "https://www.yourRedirectURL.com/.....",
	notificationUrl:
		"https://sandbox.yourRedirectURL.com/transaction/PGBackEndServlet",
};

function updateOutput() {
	const selectedMethod = paymentSelect.value;
	const selectedCurrency = currencySelect.value;

	const req = structuredClone(baseRequest); // Deep copy
	req.payment.paymentMethod = selectedMethod;
	req.payment.currency = selectedCurrency;

	// Handle payment method logic
	switch (selectedMethod) {
		case "CREDIT_CARD":
		case "DEBIT_CARD":
			// keep card, remove others
			req.payment.paymentBrand = "VISA";
			delete req.payment.wallet;
			delete req.payment.vpaAddress;
			break;

		case "WALLET":
			req.payment.paymentBrand = "WALLET";
			delete req.payment.card;
			delete req.payment.vpaAddress;
			break;

		case "UPI":
			delete req.payment.card;
			delete req.payment.wallet;
			req.payment.paymentBrand = "UPI";
			break;

		case "NET_BANKING":
			req.payment.paymentBrand = "BANK";
			delete req.payment.card;
			delete req.payment.wallet;
			delete req.payment.vpaAddress;
			break;
	}

	output.textContent = JSON.stringify(req, null, 2);
}

paymentSelect.addEventListener("change", updateOutput);
currencySelect.addEventListener("change", updateOutput);

// Initial render
updateOutput();

// Response JSON OUTPUT - transactions
document.addEventListener("DOMContentLoaded", function () {
	const paymentSelect = document.getElementById("paymentMethod");
	const currencySelect = document.getElementById("currency");

	// Response containers
	const responseBlocks = {
		threeDS: document.getElementById("responsejsonOutput-3ds"),
		success: document.getElementById("responsejsonOutput-success"),
		failed: document.getElementById("responsejsonOutput-failed"),
		pending: document.getElementById("responsejsonOutput-pending"),
	};

	function getPaymentBrand(method) {
		switch (method) {
			case "WALLET":
				return "WALLET";
			case "UPI":
				return "UPI";
			case "NET_BANKING":
				return "BANK";
			default:
				return "VISA"; // CREDIT / DEBIT fallback
		}
	}

	function generateResponse() {
		const paymentMethod = paymentSelect.value;
		const currency = currencySelect.value;

		// Base response
		const baseResponse = {
			tsid: "126",
			paymentBrand: getPaymentBrand(paymentMethod), // ✅ dynamic brand
			paymentMethod: paymentMethod,
			amount: "10.00",
			currency: currency,
			responseCode: "90026",
			card: {
				bin: "421234",
				lastFourDigits: "1237",
				cardHolderName: "Test test",
				expiryMonth: "12",
				expiryYear: "2025",
			},
			transactionTime: "2024-12-27 16:40:14",
			notificationUrl:
				"https://test.volantpay.com/transaction/TestBENotification",
		};

		// Handle wallet, UPI, NB → remove card, show correct fields
		if (paymentMethod === "WALLET") {
			delete baseResponse.card;
			baseResponse.wallet = {
				username: "dev@123",
				walletId: "asd1233",
			};
		}
		if (paymentMethod === "UPI") {
			delete baseResponse.card;
			baseResponse.vpaAddress = "john.dave@okhdfcbank";
		}
		if (paymentMethod === "NET_BANKING") {
			delete baseResponse.card;
		}

		// 3DS Pending Response
		const threeDS = structuredClone(baseResponse);
		threeDS.remark = "Authentication Pending";
		threeDS.status = "pending";
		threeDS.redirect = {
			url: "https://sandbox.example.com/images/OTPpage.html",
			method: "POST",
			params: [
				{
					key: "TermUrl",
					value:
						"https://api.online.gateway-payments.com/pay/114b078b-8bdd-4224-9f7b-b0e6057603a9/fc447754-0f8a-4d7f-80a0-63ab223dfcfa/authenticate/",
				},
				{ key: "MD", value: "1212" },
				{ key: "paReq", value: "xyzwerthytrer" },
				{ key: "cReq", value: "qwertyuio" },
			],
		};
		responseBlocks.threeDS.textContent = JSON.stringify(threeDS, null, 2);

		// Success Response
		const success = structuredClone(baseResponse);
		success.remark = "Successfull";
		success.status = "success";
		delete success.redirect;
		responseBlocks.success.textContent = JSON.stringify(success, null, 2);

		// Failed Response
		const failed = structuredClone(baseResponse);
		failed.remark = "Failed";
		failed.status = "failed";
		delete failed.redirect;
		responseBlocks.failed.textContent = JSON.stringify(failed, null, 2);

		// Pending Response
		const pending = structuredClone(baseResponse);
		pending.remark = "Pending";
		pending.status = "pending";
		delete pending.redirect;
		responseBlocks.pending.textContent = JSON.stringify(pending, null, 2);
	}

	// Listeners
	paymentSelect.addEventListener("change", generateResponse);
	currencySelect.addEventListener("change", generateResponse);

	// Init
	generateResponse();
});
