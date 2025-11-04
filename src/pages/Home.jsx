export default function Home() {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [teamIdInput, setTeamIdInput] = useState('');
  const [teamId, setTeamId] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [liveList, setLiveList] = useState([]);
  const [liveError, setLiveError] = useState(null);

  const stylesInjected = useRef(false);

  // load Google font "Poppins" once
  useEffect(() => {
    const id = 'poppins-google-font';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap';
    document.head.appendChild(link);
  }, []);

  // --- helpers to handle varied API wrapper shapes ---
  const tryExtract = (resp) => {
    if (!resp) return null;
    if (resp.data) return resp.data;
    if (resp.rawResponse && resp.rawResponse.data) return resp.rawResponse.data;
    if (resp.data && resp.data.data) return resp.data.data;
    if (resp.response) return resp.response;
    if (resp.body && typeof resp.body === 'string') {
      try { return JSON.parse(resp.body); } catch { /* ignore */ }
    }
    return resp;
  };

  const flattenLiveMatches = (payload) => {
    if (!payload) return [];

    const out = [];
    if (Array.isArray(payload.matches) && payload.matches.length) out.push(...payload.matches);
    else if (Array.isArray(payload.data) && payload.data.length) out.push(...payload.data);
    else if (Array.isArray(payload)) out.push(...payload);

    if (Array.isArray(payload.typeMatches)) {
      payload.typeMatches.forEach((tm) => {
        const series = tm.seriesMatches || tm.series || [];
        if (Array.isArray(series)) {
          series.forEach((s) => {
            const saw = s.seriesAdWrapper || s;
            if (saw && Array.isArray(saw.matches)) out.push(...saw.matches);
            else if (Array.isArray(s.seriesMatches)) out.push(...s.seriesMatches);
            else if (Array.isArray(s.matches)) out.push(...s.matches);
          });
        }
      });
    }

    if (payload.match) out.push(payload.match);

    const seen = new Set();
    const deduped = [];
    out.forEach((m) => {
      const id = m?.match?.id || m?.matchId || m?.id || m?.unique_id || m?.mid ||
        (m?.matchInfo && m.matchInfo.matchId) || JSON.stringify(m).slice(0, 80);
      if (!seen.has(String(id))) {
        seen.add(String(id));
        deduped.push({ raw: m, id: String(id) });
      }
    });

    return deduped;
  };

  const normalizeMatchId = (id) => {
    if (id === null || id === undefined) return null;
    if (typeof id === 'number') return id;
    const s = String(id);
    const digits = s.match(/\d{2,}/);
    return digits ? digits[0] : s;
  };

  // --- fetch initial live list once (no polling) ---
  const fetchInitialLive = useCallback(async () => {
    setLoadingInitial(true);
    setLiveError(null);
    try {
      const resp = await getLiveMatches();
      const payload = tryExtract(resp);
      const matches = flattenLiveMatches(payload);
      setLiveList(matches);
      if (matches && matches.length > 0) setSelectedMatch(String(matches[0].id));
    } catch (err) {
      console.warn('Auto-select live match failed', err);
      setLiveError(err?.message || 'Failed to load live matches');
    } finally {
      setLoadingInitial(false);
    }
  }, []);

  useEffect(() => { fetchInitialLive(); }, [fetchInitialLive]);

  function onSelectMatch(id) {
    const s = id != null ? String(id) : null;
    setSelectedMatch(s);
    const el = document.getElementById('match-detail');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function viewTeam() {
    if (!teamIdInput) return;
    setTeamId(teamIdInput.trim());
    const el = document.getElementById('team-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // perspective parent for translateZ
  const heroWrapperStyle = {
    perspective: '1100px',
    WebkitPerspective: '1100px',
  };

  const heroBoxStyle = {
    transformStyle: 'preserve-3d',
    WebkitTransformStyle: 'preserve-3d',
  };


<>
style={{ fontFamily: "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}

  —
            {/* subtle outer border/shadow */}
            <div className={homeStyles.heroShadow} style={{ boxShadow: '0 8px 30px rgba(14, 30, 50, 0.06)', borderRadius: '24px' }} />
    
</>


}
