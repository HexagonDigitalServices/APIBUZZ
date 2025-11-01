

  // Load Eczar font (Google Fonts) once
  useEffect(() => {
    const id = 'eczar-google-font';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Eczar:wght@600;700&display=swap';
    document.head.appendChild(link);
  }, []);


            <button
              aria-expanded={menuOpen}
              aria-label="Open menu"
              onClick={() => setMenuOpen((s) => !s)}
              className={headerStyles.menuToggleButton}
            >
              <svg className={headerStyles.menuIcon} viewBox="0 0 24 24" fill="none" aria-hidden>
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
