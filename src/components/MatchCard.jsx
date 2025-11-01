
{ match = {}, onClick }
  const {
    id = 'm1',
    teamA = { name: 'Team A', score: '' },
    teamB = { name: 'Team B', score: '' },
    status = '',
    venue = '',
    time = '',
  } = match;

  const flagA = flagForTeamName(teamA?.name || '');
  const flagB = flagForTeamName(teamB?.name || '');

  // Dynamic status color
  const statusColorClass = status?.toLowerCase().includes('live') 
    ? matchCardStyles.statusLive 
    : matchCardStyles.statusDefault;

—