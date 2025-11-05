{ name, imgUrl, size = 'default' }
  const { width, height } = avatarSizes[size] || avatarSizes.default;
  const avatarStyle = { width, height };

  if (imgUrl) {
    return (
      <img 
        src={imgUrl} 
        alt={name} 
        className={playerListStyles.avatarImage}
        style={avatarStyle}
      />
    );
  }

  const initials = name
    ? name
        .split(' ')
        .map((p) => p[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '?';



{ players = [], onSelect, compact = false }

    {(p.name || '?').split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()}

 •
