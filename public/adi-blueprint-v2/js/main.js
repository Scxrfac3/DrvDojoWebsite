/**
 * THE COMPLETE ADI BLUEPRINT - Single Page Guide
 * Custom JavaScript for navigation, interactivity, and tools
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // =======================================================================
    // MAIN SITE HEADER MOBILE MENU
    // =======================================================================
    const siteMobileMenu = document.getElementById('siteMobileMenu');
    const mobileNav = document.getElementById('mobileNav');
    
    if (siteMobileMenu && mobileNav) {
        siteMobileMenu.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            if (mobileNav.classList.contains('active')) {
                siteMobileMenu.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                siteMobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // =======================================================================
    // SIDEBAR NAVIGATION
    // =======================================================================
    const sidebar = document.getElementById('sidebar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const chapterLinks = document.querySelectorAll('.chapter-link');

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    // Toggle sidebar
    function toggleSidebar(open) {
        if (open) {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    mobileMenuToggle.addEventListener('click', function() {
        const isOpen = sidebar.classList.contains('open');
        toggleSidebar(!isOpen);
    });

    sidebarClose.addEventListener('click', function() {
        toggleSidebar(false);
    });

    overlay.addEventListener('click', function() {
        toggleSidebar(false);
    });

    // Close sidebar on link click
    chapterLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                toggleSidebar(false);
            }
        });
    });

    // =======================================================================
    // ACTIVE SECTION TRACKING
    // =======================================================================
    const sections = document.querySelectorAll('.section[id]');
    const progressFill = document.getElementById('sidebarProgress');
    const progressPercent = document.getElementById('progressPercent');

    function updateActiveLink() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Update chapter links
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                chapterLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Update progress bar
        const progress = Math.min((scrollY / (documentHeight - windowHeight)) * 100, 100);
        progressFill.style.width = progress + '%';
        progressPercent.textContent = Math.round(progress) + '%';
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // =======================================================================
    // COST COMPARISON TOGGLE
    // =======================================================================
    const routeButtons = document.querySelectorAll('.route-btn');
    const independentCosts = document.getElementById('independent-costs');
    const franchiseCosts = document.getElementById('franchise-costs');

    routeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const route = this.getAttribute('data-route');

            routeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (route === 'independent') {
                independentCosts.classList.add('active');
                franchiseCosts.classList.remove('active');
            } else {
                independentCosts.classList.remove('active');
                franchiseCosts.classList.add('active');
            }
        });
    });

    // =======================================================================
    // INCOME CALCULATOR
    // =======================================================================
    const lessonsInput = document.getElementById('lessonsPerWeek');
    const priceInput = document.getElementById('avgLessonPrice');
    const weeksInput = document.getElementById('workingWeeks');
    const costsInput = document.getElementById('weeklyCosts');
    const toggleOptions = document.querySelectorAll('.toggle-option');
    const franchiseCostsInput = document.querySelector('.franchise-costs-input');
    const franchiseFeeInput = document.getElementById('franchiseFee');

    const grossRevenueEl = document.getElementById('grossRevenue');
    const annualCostsEl = document.getElementById('annualCosts');
    const netIncomeEl = document.getElementById('netIncome');
    const monthlyIncomeEl = document.getElementById('monthlyIncome');

    let isIndependent = true;

    function calculateIncome() {
        const lessons = parseFloat(lessonsInput.value) || 0;
        const price = parseFloat(priceInput.value) || 0;
        const weeks = parseFloat(weeksInput.value) || 0;
        const costs = parseFloat(costsInput.value) || 0;
        const franchiseFee = parseFloat(franchiseFeeInput.value) || 0;

        const grossRevenue = lessons * price * weeks;
        let annualCosts = (costs * weeks);

        if (!isIndependent) {
            annualCosts += (franchiseFee * weeks);
        }

        const netIncome = grossRevenue - annualCosts;
        const monthlyIncome = netIncome / 12;

        grossRevenueEl.textContent = '£' + grossRevenue.toLocaleString('en-GB', { maximumFractionDigits: 0 });
        annualCostsEl.textContent = '£' + annualCosts.toLocaleString('en-GB', { maximumFractionDigits: 0 });
        netIncomeEl.textContent = '£' + netIncome.toLocaleString('en-GB', { maximumFractionDigits: 0 });
        monthlyIncomeEl.textContent = '£' + monthlyIncome.toLocaleString('en-GB', { maximumFractionDigits: 0 });
    }

    toggleOptions.forEach(option => {
        option.addEventListener('click', function() {
            toggleOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            isIndependent = this.getAttribute('data-type') === 'independent';
            franchiseCostsInput.style.display = isIndependent ? 'none' : 'flex';
            calculateIncome();
        });
    });

    [lessonsInput, priceInput, weeksInput, costsInput, franchiseFeeInput].forEach(input => {
        input.addEventListener('input', calculateIncome);
    });

    // Initial calculation
    calculateIncome();

    // =======================================================================
    // INTERACTIVE CHECKLIST
    // =======================================================================
    const STORAGE_KEY = 'adi_blueprint_90day_checklist';
    const checklistItems = document.querySelectorAll('.interactive-checklist .checklist-item input[type="checkbox"]');
    const checklistProgress = document.getElementById('checklistProgress');
    const checklistPercent = document.getElementById('checklistPercent');

    function loadChecklistState() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    }

    function saveChecklistState(state) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function updateChecklistProgress() {
        const state = loadChecklistState();
        let checkedCount = 0;

        checklistItems.forEach(checkbox => {
            const itemId = checkbox.getAttribute('data-item');
            if (state[itemId]) {
                checkbox.checked = true;
                checkedCount++;
            }
        });

        const totalItems = checklistItems.length;
        const percentage = (checkedCount / totalItems) * 100;

        checklistProgress.style.width = percentage + '%';
        checklistPercent.textContent = Math.round(percentage) + '% (' + checkedCount + '/' + totalItems + ')';
    }

    checklistItems.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const state = loadChecklistState();
            const itemId = this.getAttribute('data-item');
            state[itemId] = this.checked;
            saveChecklistState(state);
            updateChecklistProgress();
        });
    });

    // Initialize checklist progress
    updateChecklistProgress();

    // =======================================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // =======================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =======================================================================
    // EXTERNAL LINKS
    // =======================================================================
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // =======================================================================
    // RESIZE HANDLER
    // =======================================================================
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            updateActiveLink();
        }, 100);
    });

    // =======================================================================
    // ANIMATIONS ON SCROLL
    // =======================================================================
    const animatedElements = document.querySelectorAll('.content-block, .drive-dojo-tip, .download-card, .resource-card, .training-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // =======================================================================
    // CONSOLE BRANDING
    // =======================================================================
    console.log('%c THE COMPLETE ADI BLUEPRINT ', 'background: #e63946; color: white; font-size: 16px; padding: 10px 20px; border-radius: 4px;');
    console.log('%c By Drive Dojo | drivedojodrivingschool.com ', 'color: #888; font-size: 12px;');

});
