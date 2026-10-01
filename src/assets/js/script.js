/*
Author       : Dreams Technologies
Template Name: Pharmacy POS - Bootstrap Admin Template
*/


ready(function(){

	var wrapper = document.querySelector('.main-wrapper');
	var overlay = document.createElement('div');
	overlay.className = 'sidebar-overlay';
	wrapper.parentNode.insertBefore(overlay, wrapper);

	// Toggle Mobile Menu
	document.addEventListener('click', function (e) {
		if (!e.target.closest('#mobile_btn')) return;
		e.preventDefault();
		wrapper.classList.toggle('slide-nav');
		overlay.classList.toggle('opened');
		document.documentElement.classList.toggle('menu-opened');
	});

	// Close sidebar on close button click
	document.addEventListener('click', function (e) {
		if (!e.target.closest('.sidebar-close, .sidebar-overlay')) return;
		wrapper.classList.remove('slide-nav');
		overlay.classList.remove('opened');
		document.documentElement.classList.remove('menu-opened');
	});

	// Sidebar auto-scroll: bring the clicked/active menu item into view within the sidebar's scroll area
	function getSidebarScrollEl() {
		var sidebarInner = document.querySelector('.sidebar-inner');
		if (!sidebarInner) return null;
		return sidebarInner.querySelector('.simplebar-content-wrapper') || sidebarInner;
	}

	function scrollSidebarToLink(link, delay) {
		if (!link) return;
		setTimeout(function () {
			var scrollEl = getSidebarScrollEl();
			if (!scrollEl) return;

			var containerRect = scrollEl.getBoundingClientRect();
			var linkRect = link.getBoundingClientRect();

			var isAbove = linkRect.top < containerRect.top;
			var isBelow = linkRect.bottom > containerRect.bottom;

			if (!isAbove && !isBelow) return; // already visible, no need to scroll

			var offset = (linkRect.top - containerRect.top) - (containerRect.height / 2) + (linkRect.height / 2);
			var targetTop = scrollEl.scrollTop + offset;

			if (typeof scrollEl.scrollTo === 'function') {
				scrollEl.scrollTo({ top: targetTop, behavior: 'smooth' });
			} else {
				scrollEl.scrollTop = targetTop;
			}
		}, delay || 0);
	}

	// Sidebar
	function initSidebarMenu() {
		var menuLinks = document.querySelectorAll('.sidebar-menu a');

		menuLinks.forEach(function (link) {
			link.addEventListener('click', function (e) {
				var submenu = link.nextElementSibling && link.nextElementSibling.tagName === 'UL' ? link.nextElementSibling : null;

				if (link.parentElement.classList.contains('submenu')) {
					e.preventDefault();

					if (!link.classList.contains('subdrop')) {
						// Collapse all other open submenus
						var scopeUl = link.closest('ul');
						if (scopeUl) {
							scopeUl.querySelectorAll('ul').forEach(function (ul) {
								if (ul.style.display !== 'none' && getComputedStyle(ul).display !== 'none') {
									slideUp(ul, 250);
								}
							});
							scopeUl.querySelectorAll('a.subdrop').forEach(function (a) {
								a.classList.remove('subdrop');
							});
						}

						// Expand current
						if (submenu) slideDown(submenu, 350);
						link.classList.add('subdrop');
						scrollSidebarToLink(link, 360);
					} else {
						// Collapse current
						link.classList.remove('subdrop');
						if (submenu) slideUp(submenu, 350);
					}
				} else {
					scrollSidebarToLink(link, 0);
				}
			});
		});

		// Ensure any active link's submenu is shown with animation-ready state
		document.querySelectorAll('.sidebar-menu ul li.submenu a.active').forEach(function (link) {
			var submenu = link.closest('ul');
			var parentLink = submenu ? submenu.previousElementSibling : null;

			if (parentLink) parentLink.classList.add('active', 'subdrop');
			if (submenu) submenu.style.display = 'block'; // force show without using .show()

			// Now mark it manually as ready for animation
			if (submenu) {
				submenu.style.height = submenu.scrollHeight + 'px'; // set explicit height
				submenu.style.height = 'auto';                       // restore auto height
			}
		});

		// Bring the active menu item into view on page load (e.g. if it's near the bottom)
		var activeLink = document.querySelector('.sidebar-menu a.active');
		if (activeLink) scrollSidebarToLink(activeLink, 300);
	}

	// Initialize Sidebar
	initSidebarMenu();


	// Mouse Over
	document.addEventListener('mouseover', function (e) {
		e.stopPropagation();
		var body = document.body;
		if (body.classList.contains('mini-sidebar') && document.getElementById('toggle_btn') && isVisible(document.getElementById('toggle_btn'))) {
			var targ = e.target.closest('.sidebar, .header-left');
			if (targ) {
				body.classList.add('expand-menu');
				document.querySelectorAll('.subdrop + ul').forEach(function (ul) { slideDown(ul); });
			} else {
				body.classList.remove('expand-menu');
				document.querySelectorAll('.subdrop + ul').forEach(function (ul) { slideUp(ul); });
			}
			return false;
		}
	});

	function isVisible(el) {
		return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}

	// Toggle Button
	document.addEventListener('click', function (e) {
		if (!e.target.closest('#toggle_btn, #toggle_btn2')) return;
		var trigger = e.target.closest('#toggle_btn, #toggle_btn2');
		var body = document.body;
		var html = document.documentElement;
		var isMini = body.classList.contains('mini-sidebar');

		if (isMini) {
			body.classList.remove('mini-sidebar');
			trigger.classList.add('active');
			localStorage.setItem('screenModeNightTokenState', 'night');
			setTimeout(function () {
				var headerLeft = document.querySelector('.header-left');
				if (headerLeft) headerLeft.classList.add('active');
			}, 100);
		} else {
			body.classList.add('mini-sidebar');
			trigger.classList.remove('active');
			localStorage.removeItem('screenModeNightTokenState');
			setTimeout(function () {
				var headerLeft = document.querySelector('.header-left');
				if (headerLeft) headerLeft.classList.remove('active');
			}, 100);
		}

		return false;
	});

	// Tooltip
	if (document.querySelector('[data-bs-toggle="tooltip"]')) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}

	// Booking Range
	if (document.querySelector('.bookingrange, .date-range')) {
		var daysAgo = function (n) {
			var d = new Date();
			d.setDate(d.getDate() - n);
			return d;
		};
		var yearStart = function (offset) {
			var d = new Date();
			return new Date(d.getFullYear() + offset, 0, 1);
		};
		var yearEnd = function (offset) {
			var d = new Date();
			return new Date(d.getFullYear() + offset, 11, 31);
		};

		var start = daysAgo(6);
		var end = new Date();
		function formatMDY(d) {
			if (!d || isNaN(d.getTime())) return '';
			var m = d.getMonth() + 1;
			var day = d.getDate();
			return (m < 10 ? '0' + m : m) + '/' + (day < 10 ? '0' + day : day) + '/' + d.getFullYear();
		}
		function booking_range(start, end) {
			var text = formatMDY(start) + ' - ' + formatMDY(end);
			var targetElements = (this && this.element) ? [this.element] : document.querySelectorAll('.bookingrange, .date-range');
			targetElements.forEach(function (el) {
				if (el.tagName === 'INPUT') {
					el.value = text;
				}
				var span = el.querySelector('span');
				if (span) {
					span.innerHTML = text;
				}
			});
		}

		if (typeof window.initDateRangePicker === 'function') {
			initDateRangePicker('.bookingrange, .date-range', {
				startDate: start,
				endDate: end,
				ranges: {
					'Today': [new Date(), new Date()],
					'Yesterday': [daysAgo(1), daysAgo(1)],
					'Last 7 Days': [daysAgo(6), new Date()],
					'Last 30 Days': [daysAgo(29), new Date()],
					'This Year': [yearStart(0), yearEnd(0)],
					'Next Year': [yearStart(1), yearEnd(1)]
				}
			}, booking_range);
		}
		booking_range(start, end);
	}

	// Datatable
	if (document.querySelector('.datatable')) {
		initDataTables('.datatable', {
			bFilter: true,
			pagingType: 'simple_numbers',
			ordering: true,
			language: {
				search: ' ',
				sLengthMenu: 'Go to Page _MENU_',
				searchPlaceholder: "Search...",
				info: "Showing 1-10 of 1200 medicines",
				paginate: {
					// Ensure these classes match your CSS library
					next: '<span><i class="icon-chevron-right"></i></span>',
					previous: '<span><i class="icon-chevron-left"></i></span>'
				},
			},
			initComplete: function () {
				document.querySelectorAll('.dataTables_filter').forEach(function (node) {
					var target = document.getElementById('tablefilter');
					if (target) target.appendChild(node);
				});
				document.querySelectorAll('.dataTables_info').forEach(function (node) {
					var target = document.getElementById('tableinfo');
					if (target) target.appendChild(node);
				});
				document.querySelectorAll('.dataTables_paginate').forEach(function (node) {
					var target = document.getElementById('tablepage');
					if (target) target.appendChild(node);
				});
				document.querySelectorAll('.dataTables_length').forEach(function (node) {
					var target = document.getElementById('tablelength');
					if (target) target.appendChild(node);
				});
			}
		});
	}

	// Reusable "Show More/Less" Toggle for Multiple Sections
	for (var i = 0; i <= 6; i++) {
		(function (i) {
			var moreMenu = document.querySelectorAll('.more-menu' + (i || ''));
			var viewAllBtn = document.querySelectorAll('.viewall' + (i || '') + '-button');

			if (moreMenu.length > 0) {
				moreMenu.forEach(function (el) { el.style.display = 'none'; });
				viewAllBtn.forEach(function (btn) {
					btn.addEventListener('click', function () {
						var isLess = btn.textContent === 'view Less';
						btn.textContent = isLess ? 'View More' : 'View Less';
						moreMenu.forEach(function (el) {
							if (getComputedStyle(el).display === 'none') {
								slideDown(el, 900);
							} else {
								slideUp(el, 900);
							}
						});
					});
				});
			}
		})(i);
	}

	// Select 2
	if (document.querySelector('.select')) {
		document.querySelectorAll('.select').forEach(function (select) {
			select2Init(select, {
				minimumResultsForSearch: -1,
				width: '100%'
			});
		});
	}

	// Flatpicker
	document.querySelectorAll('[data-provider="flatpickr"]').forEach(el => {
		const config = {
			disableMobile: true
		};
		if (el.hasAttribute('data-date-format')) {
			config.dateFormat = el.getAttribute('data-date-format');
		}
		if (el.hasAttribute('data-enable-time')) {
			config.enableTime = true;
			config.dateFormat = config.dateFormat ? `${config.dateFormat} H:i` : 'Y-m-d H:i';
		}
		if (el.hasAttribute('data-altFormat')) {
			config.altInput = true;
			config.altFormat = el.getAttribute('data-altFormat');
		}
		if (el.hasAttribute('data-minDate')) {
			config.minDate = el.getAttribute('data-minDate');
		}
		if (el.hasAttribute('data-maxDate')) {
			config.maxDate = el.getAttribute('data-maxDate');
		}
		if (el.hasAttribute('data-default-date')) {
			const defaultDate = el.getAttribute('data-default-date');
			// Check if it's a valid date string
			if (!["true", "false", "", null].includes(defaultDate) && !isNaN(Date.parse(defaultDate))) {
				config.defaultDate = defaultDate;
			}
		}
		if (el.hasAttribute('data-multiple-date')) {
			config.mode = 'multiple';
		}
		if (el.hasAttribute('data-range-date')) {
			config.mode = 'range';
		}
		if (el.hasAttribute('data-inline-date')) {
			config.inline = true;
			const inlineDate = el.getAttribute('data-inline-date');
			if (!["true", "false", "", null].includes(inlineDate) && !isNaN(Date.parse(inlineDate))) {
				config.defaultDate = inlineDate;
			}
		}
		if (el.hasAttribute('data-disable-date')) {
			config.disable = el.getAttribute('data-disable-date').split(',');
		}
		if (el.hasAttribute('data-week-number')) {
			config.weekNumbers = true;
		}
		flatpickr(el, config);
	});

	// Time Picker
    document.querySelectorAll('[data-provider="timepickr"]').forEach(item => {
        const attrs = item.attributes;
        const config = {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i"
        };

        if (attrs["data-time-hrs"]) {
            config.time_24hr = true;
        }

        if (attrs["data-min-time"]) {
            config.minTime = attrs["data-min-time"].value;
        }

        if (attrs["data-max-time"]) {
            config.maxTime = attrs["data-max-time"].value;
        }

        if (attrs["data-default-time"]) {
            config.defaultDate = attrs["data-default-time"].value;
        }

        if (attrs["data-time-inline"]) {
            config.inline = true;
            config.defaultDate = attrs["data-time-inline"].value;
        }

        flatpickr(item, config);
    });

	// Slick Slider
	// NOTE: the Slick Carousel plugin was loaded on some pages but never
	// actually initialized on any element (no .slick()-style call site and no
	// carousel markup), so this has always been a no-op / dead include in
	// production. slick-vanilla.js (slickInit/slickGetInstance) is available
	// on window if a page ever needs it; nothing currently calls it.

	//Increment Decrement Numberes
	document.querySelectorAll(".quantity-control").forEach(container => {
		const input = container.querySelector(".quantity-input");
		container.querySelector(".add-btn").addEventListener("click", () => {
			input.value = Number(input.value) + 1;
		});
		container.querySelector(".minus-btn").addEventListener("click", () => {
			if (Number(input.value) > 1) input.value = Number(input.value) - 1;
		});
	});

	// Add Active Class
	document.querySelectorAll('.pos-item').forEach(item => {
		item.addEventListener('click', function() {
			this.classList.toggle('active');
		});
	});

	// Add Active Class
	document.querySelectorAll('.print-item').forEach(item => {
		item.addEventListener('click', function() {
			// 1. Remove 'active' from all items
			document.querySelectorAll('.print-item').forEach(el => {
				el.classList.remove('active');
			});

			// 2. Add 'active' to the clicked item
			this.classList.add('active');
		});
	});

  	// Target the modal by its class or a generic selector
	document.querySelectorAll('.modal').forEach(modal => {

		modal.addEventListener('shown.bs.modal', function () {
			// Find elements INSIDE this specific modal using 'this'
			const loader = this.querySelector('.loading-state');
			const content = this.querySelector('.content-state');

			// Start 2-second timer
			setTimeout(() => {
				if (loader && content) {
					loader.classList.add('d-none');    // Hide Loader
					content.classList.remove('d-none'); // Show Content
				}
			}, 2000);
		});

		// Reset when closed so it shows loading again next time
		modal.addEventListener('hidden.bs.modal', function () {
			const loader = this.querySelector('.loading-state');
			const content = this.querySelector('.content-state');

			if (loader && content) {
				loader.classList.remove('d-none');
				content.classList.add('d-none');
			}
		});
	});

	// Select the content area and all tab links
	const uploadContent = document.querySelector('.upload-content');
	const tabs = document.querySelectorAll('.prescription-tab a');

	tabs.forEach(tab => {
		tab.addEventListener('click', function(e) {
			e.preventDefault(); // Stop page from jumping

			// 1. Manage Active Class
			tabs.forEach(t => t.classList.remove('active'));
			this.classList.add('active');

			// 2. Show/Hide Logic based on ID
			if (this.id === 'upload-prescription') {
				// Show the content
				uploadContent.style.display = 'block';
				// If using Bootstrap, use: uploadContent.classList.remove('d-none');
			}
			else if (this.id === 'scan-prescription') {
				// Hide the content
				uploadContent.style.display = 'none';
				// If using Bootstrap, use: uploadContent.classList.add('d-none');
			}
		});
	});

	// Payment Split
	const handlePaymentChange = (element) => {
		const contents = document.querySelectorAll('.split-content');
		contents.forEach((content) => {
			if (element.id === 'split') {
				content.classList.add('d-none');
			} else {
				content.classList.remove('d-none');
			}
		});
	};

	document.querySelectorAll('input[name="payment-method"]').forEach((radio) => {
		// Handle changes
		radio.addEventListener('change', function() {
			handlePaymentChange(this);
		});

		// Sync state on load if already checked
		if (radio.checked) handlePaymentChange(radio);
	});


	// Payment Method
	document.querySelectorAll('input[name="payment"]').forEach((radio) => {
		radio.addEventListener('change', function() {
			// 1. Find all elements that belong to payment content
			const allContent = document.querySelectorAll('.payment-content');

			// 2. Hide everything by default
			allContent.forEach(content => content.classList.add('d-none'));

			// 3. Show specific classes based on the clicked ID
			if (this.id === 'card') {
				document.querySelectorAll('.card-info').forEach(el => el.classList.remove('d-none'));
			}
			else if (this.id === 'upi') {
				document.querySelectorAll('.upi-info').forEach(el => el.classList.remove('d-none'));
			}
			// If 'cash' is clicked, it stays hidden because of step 2
		});
	});


});

// Toggle Password
if (document.querySelector('.toggle-password')) {
	document.addEventListener('click', function (e) {
		var toggle = e.target.closest('.toggle-password');
		if (!toggle) return;
		var icon = toggle.querySelector('i');
		var input = toggle.closest('.input-group').querySelector('.pass-input');
		if (input.getAttribute('type') === 'password') {
			input.setAttribute('type', 'text');
			icon.classList.remove('icon-eye-off');
			icon.classList.add('icon-eye');
		} else {
			input.setAttribute('type', 'password');
			icon.classList.remove('icon-eye');
			icon.classList.add('icon-eye-off');
		}
	});
}
