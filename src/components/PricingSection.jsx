import React, { useRef, useEffect } from 'react';

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-forsythia)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', display: 'inline-block', verticalAlign: 'middle'}}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function PricingSection() {
  // Refs for tracking active state without triggering component re-renders
  const currentBillingRef = useRef('monthly');
  const currentCurrencyRef = useRef('USD');
  const isDropdownOpenRef = useRef(false);

  // References for direct DOM updates (State Isolation Guardrail)
  const starterPriceRef = useRef(null);
  const proPriceRef = useRef(null);
  const enterprisePriceRef = useRef(null);

  const starterPeriodRef = useRef(null);
  const proPeriodRef = useRef(null);
  const enterprisePeriodRef = useRef(null);

  // References for styling toggle switches and dropdown list
  const billingMonthlyBtnRef = useRef(null);
  const billingAnnualBtnRef = useRef(null);
  const dropdownBtnRef = useRef(null);
  const dropdownListRef = useRef(null);

  // Dynamic pricing matrix
  const PRICING_DATA = {
    tiers: {
      starter: { baseUSD: 29 },
      pro: { baseUSD: 79 },
      enterprise: { baseUSD: 149 }
    },
    billing: {
      monthly: { multiplier: 1.0, label: '/mo', period: 'Billed monthly' },
      annual: { multiplier: 0.8, label: '/mo', period: 'Billed annually' } // 20% discount
    },
    currencies: {
      USD: { symbol: '$', rate: 1.0, tariff: 1.0 },
      EUR: { symbol: '€', rate: 0.92, tariff: 1.0 },
      INR: { symbol: '₹', rate: 83.0, tariff: 0.95 } // Affordable regional tariff
    }
  };

  const calculatePrice = (baseUSD, billingType, currencyCode) => {
    const billingConfig = PRICING_DATA.billing[billingType];
    const currencyConfig = PRICING_DATA.currencies[currencyCode];
    
    const rawVal = baseUSD * billingConfig.multiplier * currencyConfig.rate * currencyConfig.tariff;
    return Math.round(rawVal);
  };

  const updatePricingDOM = (billingType, currencyCode) => {
    const curConfig = PRICING_DATA.currencies[currencyCode];
    const billConfig = PRICING_DATA.billing[billingType];

    const starterVal = calculatePrice(PRICING_DATA.tiers.starter.baseUSD, billingType, currencyCode);
    const proVal = calculatePrice(PRICING_DATA.tiers.pro.baseUSD, billingType, currencyCode);
    const enterpriseVal = calculatePrice(PRICING_DATA.tiers.enterprise.baseUSD, billingType, currencyCode);

    if (starterPriceRef.current) {
      starterPriceRef.current.textContent = `${curConfig.symbol}${starterVal}`;
    }
    if (proPriceRef.current) {
      proPriceRef.current.textContent = `${curConfig.symbol}${proVal}`;
    }
    if (enterprisePriceRef.current) {
      enterprisePriceRef.current.textContent = `${curConfig.symbol}${enterpriseVal}`;
    }

    if (starterPeriodRef.current) {
      starterPeriodRef.current.textContent = `${billConfig.label} (${billConfig.period})`;
    }
    if (proPeriodRef.current) {
      proPeriodRef.current.textContent = `${billConfig.label} (${billConfig.period})`;
    }
    if (enterprisePeriodRef.current) {
      enterprisePeriodRef.current.textContent = `${billConfig.label} (${billConfig.period})`;
    }
  };

  // Handle billing toggle clicks
  const handleBillingToggle = (type) => {
    currentBillingRef.current = type;
    
    if (billingMonthlyBtnRef.current && billingAnnualBtnRef.current) {
      if (type === 'monthly') {
        billingMonthlyBtnRef.current.classList.add('active');
        billingAnnualBtnRef.current.classList.remove('active');
        Object.assign(billingMonthlyBtnRef.current.style, styles.toggleBtnActive);
        Object.assign(billingAnnualBtnRef.current.style, styles.toggleBtn);
      } else {
        billingMonthlyBtnRef.current.classList.remove('active');
        billingAnnualBtnRef.current.classList.add('active');
        Object.assign(billingMonthlyBtnRef.current.style, styles.toggleBtn);
        Object.assign(billingAnnualBtnRef.current.style, styles.toggleBtnActive);
      }
    }
    
    updatePricingDOM(type, currentCurrencyRef.current);
  };

  // Handle dropdown open state
  const toggleDropdown = () => {
    const nextState = !isDropdownOpenRef.current;
    isDropdownOpenRef.current = nextState;
    if (dropdownListRef.current) {
      if (nextState) {
        dropdownListRef.current.classList.add('show');
      } else {
        dropdownListRef.current.classList.remove('show');
      }
    }
  };

  // Handle currency selection
  const handleCurrencySelect = (code) => {
    currentCurrencyRef.current = code;
    isDropdownOpenRef.current = false;
    
    if (dropdownBtnRef.current) {
      dropdownBtnRef.current.innerHTML = `Currency: ${code} <img src="/assets/svgs/chevron-down.svg" alt="Select" style="width: 12px; height: 12px; filter: invert(1); vertical-align: middle; margin-left: 8px;" />`;
    }
    
    if (dropdownListRef.current) {
      dropdownListRef.current.classList.remove('show');
    }
    
    updatePricingDOM(currentBillingRef.current, code);
  };

  // Initialize prices and set document outside click listener on mount
  useEffect(() => {
    updatePricingDOM('monthly', 'USD');
    
    const handleOutsideClick = (e) => {
      if (
        dropdownBtnRef.current && !dropdownBtnRef.current.contains(e.target) &&
        dropdownListRef.current && !dropdownListRef.current.contains(e.target)
      ) {
        isDropdownOpenRef.current = false;
        if (dropdownListRef.current) {
          dropdownListRef.current.classList.remove('show');
        }
      }
    };
    
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="pricing" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <div className="badge" style={{ color: 'var(--color-forsythia)', borderColor: 'rgba(255, 200, 1, 0.3)' }}>
            Transparent Pricing
          </div>
          <h2 style={styles.title}>Simple, predictable plans</h2>
          <p style={styles.subtitle}>
            Choose a plan that fits your execution volume. All plans feature low-latency deployments and strict safety guardrails.
          </p>
        </div>

        {/* Isolated Switchers */}
        <div className="pricing-controls" style={styles.controls}>
          {/* Billing Switcher */}
          <div className="billing-toggle-group" style={styles.toggleGroup}>
            <button 
              id="billing-monthly-btn"
              ref={billingMonthlyBtnRef}
              className="billing-toggle-btn active"
              onClick={() => handleBillingToggle('monthly')}
              style={styles.toggleBtnActive}
            >
              Monthly
            </button>
            <button 
              id="billing-annual-btn"
              ref={billingAnnualBtnRef}
              className="billing-toggle-btn"
              onClick={() => handleBillingToggle('annual')}
              style={styles.toggleBtn}
            >
              Annual (Save 20%)
            </button>
          </div>

          {/* Currency Dropdown Selector */}
          <div className="currency-select-container" style={styles.dropdownContainer}>
            <button 
              id="currency-dropdown-btn"
              ref={dropdownBtnRef}
              className="currency-dropdown-btn" 
              onClick={toggleDropdown}
              style={styles.dropdownBtn}
            >
              Currency: USD <img src="/assets/svgs/chevron-down.svg" alt="Select" style={styles.chevron} />
            </button>
            
            <div ref={dropdownListRef} className="currency-options-list" style={styles.dropdownList}>
              <div id="currency-opt-usd" style={styles.dropdownOption} onClick={() => handleCurrencySelect('USD')}>USD ($)</div>
              <div id="currency-opt-eur" style={styles.dropdownOption} onClick={() => handleCurrencySelect('EUR')}>EUR (€)</div>
              <div id="currency-opt-inr" style={styles.dropdownOption} onClick={() => handleCurrencySelect('INR')}>INR (₹)</div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid" style={styles.grid}>
          {/* Tier 1: Starter */}
          <div className="pricing-card" style={styles.card}>
            <div style={styles.tierName}>Starter</div>
            <div style={styles.priceContainer}>
              <span id="starter-price" ref={starterPriceRef} style={styles.priceVal}>$29</span>
              <span ref={starterPeriodRef} style={styles.periodVal}>/mo (Billed monthly)</span>
            </div>
            <p style={styles.tierDesc}>Ideal for prototyping and building small automation scripts.</p>
            <div style={styles.divider}></div>
            <ul style={styles.features}>
              <li style={styles.featureItem}><CheckIcon /> 1 Active Agent workflow</li>
              <li style={styles.featureItem}><CheckIcon /> 10,000 tokens/mo included</li>
              <li style={styles.featureItem}><CheckIcon /> Community support</li>
              <li style={styles.featureItem}><CheckIcon /> Standard model latency</li>
            </ul>
            <a href="#pricing" style={styles.tierBtn}>Get Started</a>
          </div>

          {/* Tier 2: Pro (Premium Highlighted) */}
          <div className="pricing-card premium-tier" style={styles.cardPremium}>
            <div style={styles.popularBadge}>RECOMMENDED</div>
            <div style={styles.tierName}>Pro</div>
            <div style={styles.priceContainer}>
              <span id="pro-price" ref={proPriceRef} style={styles.priceVal}>$79</span>
              <span ref={proPeriodRef} style={styles.periodVal}>/mo (Billed monthly)</span>
            </div>
            <p style={styles.tierDesc}>For growing operations and team workflow automations.</p>
            <div style={styles.divider}></div>
            <ul style={styles.features}>
              <li style={styles.featureItem}><CheckIcon /> 5 Active Agent workflows</li>
              <li style={styles.featureItem}><CheckIcon /> 100,000 tokens/mo included</li>
              <li style={styles.featureItem}><CheckIcon /> Priority SLA support</li>
              <li style={styles.featureItem}><CheckIcon /> Low-latency caching engine</li>
              <li style={styles.featureItem}><CheckIcon /> Vector database integrations</li>
            </ul>
            <a href="#pricing" style={styles.tierBtnPremium}>Upgrade to Pro</a>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="pricing-card" style={styles.card}>
            <div style={styles.tierName}>Enterprise</div>
            <div style={styles.priceContainer}>
              <span id="enterprise-price" ref={enterprisePriceRef} style={styles.priceVal}>$149</span>
              <span ref={enterprisePeriodRef} style={styles.periodVal}>/mo (Billed monthly)</span>
            </div>
            <p style={styles.tierDesc}>For large-scale clusters running production autonomous agents.</p>
            <div style={styles.divider}></div>
            <ul style={styles.features}>
              <li style={styles.featureItem}><CheckIcon /> Unlimited Agent workflows</li>
              <li style={styles.featureItem}><CheckIcon /> 1,000,000 tokens/mo included</li>
              <li style={styles.featureItem}><CheckIcon /> Dedicated 24/7 account manager</li>
              <li style={styles.featureItem}><CheckIcon /> Custom adapter weights</li>
              <li style={styles.featureItem}><CheckIcon /> High-availability clusters</li>
            </ul>
            <a href="#pricing" style={styles.tierBtn}>Contact Enterprise</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--bg-dark)',
    padding: '100px 0',
    position: 'relative',
    borderBottom: '1px solid rgba(241, 246, 244, 0.05)',
  },
  header: {
    maxWidth: '800px',
    margin: '0 auto 60px auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '44px',
    lineHeight: '1.2',
    color: 'var(--color-arctic-powder)',
    marginBottom: '24px',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: 'var(--text-muted)',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '60px',
  },
  toggleGroup: {
    display: 'flex',
    backgroundColor: 'rgba(35, 62, 77, 0.4)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    borderRadius: '100px',
    padding: '4px',
  },
  toggleBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: '500',
    padding: '10px 24px',
    borderRadius: '100px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  toggleBtnActive: {
    background: 'var(--color-arctic-powder)',
    border: 'none',
    color: 'var(--color-oceanic-noir)',
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: '600',
    padding: '10px 24px',
    borderRadius: '100px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownBtn: {
    background: 'rgba(35, 62, 77, 0.4)',
    border: '1px solid rgba(241, 246, 244, 0.08)',
    color: 'var(--color-arctic-powder)',
    padding: '10px 20px',
    borderRadius: '100px',
    cursor: 'pointer',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
  chevron: {
    width: '12px',
    height: '12px',
    filter: 'invert(1)',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%) translateY(8px)',
    background: 'rgba(23, 43, 54, 0.95)',
    border: '1px solid rgba(241, 246, 244, 0.15)',
    borderRadius: '6px',
    width: '140px',
    zIndex: 100,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
    padding: '6px 0',
  },
  dropdownOption: {
    padding: '10px 16px',
    cursor: 'pointer',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    textAlign: 'center',
    transition: 'background 0.2s ease',
    color: 'var(--color-arctic-powder)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  card: {
    background: 'rgba(35, 62, 77, 0.2)',
    border: '1px solid rgba(241, 246, 244, 0.07)',
    borderRadius: '8px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  cardPremium: {
    background: 'rgba(35, 62, 77, 0.35)',
    border: '2px solid var(--color-forsythia)',
    borderRadius: '8px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    position: 'relative',
    boxShadow: '0 15px 35px rgba(255, 200, 1, 0.05)',
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--color-forsythia)',
    color: 'var(--color-oceanic-noir)',
    padding: '4px 12px',
    borderRadius: '100px',
    fontSize: '10px',
    fontFamily: 'var(--font-mono)',
    fontWeight: '700',
    letterSpacing: '0.1em',
  },
  tierName: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--color-arctic-powder)',
    marginBottom: '16px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '6px',
    marginBottom: '20px',
  },
  priceVal: {
    fontSize: '40px',
    fontWeight: '800',
    color: 'var(--color-arctic-powder)',
    letterSpacing: '-0.02em',
  },
  periodVal: {
    fontSize: '12px',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
  },
  tierDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
    marginBottom: '32px',
    minHeight: '42px',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(241, 246, 244, 0.05)',
    marginBottom: '32px',
  },
  features: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '40px',
    flexGrow: 1,
  },
  featureItem: {
    fontSize: '14px',
    color: 'var(--color-arctic-powder)',
  },
  tierBtn: {
    backgroundColor: 'transparent',
    color: 'var(--color-arctic-powder)',
    border: '1px solid rgba(241, 246, 244, 0.15)',
    textAlign: 'center',
    padding: '14px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '14px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  tierBtnPremium: {
    backgroundColor: 'var(--color-forsythia)',
    color: 'var(--color-oceanic-noir)',
    border: '1px solid var(--color-forsythia)',
    textAlign: 'center',
    padding: '14px',
    borderRadius: '100px',
    fontWeight: '600',
    fontSize: '14px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  }
};
