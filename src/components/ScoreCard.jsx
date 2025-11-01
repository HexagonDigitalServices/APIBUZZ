
{ innings = [], collapsed = false, className = '' }




          <table className={scoreCardStyles.battingTable}>
                        <thead>
                          <tr className={scoreCardStyles.tableHeader}>
                            <th className={scoreCardStyles.tableHeaderCell}>Batsman</th>
                            <th className={scoreCardStyles.tableHeaderCell}>R</th>
                            <th className={scoreCardStyles.tableHeaderCell}>B</th>
                            <th className={scoreCardStyles.tableHeaderCell}>4s</th>
                            <th className={scoreCardStyles.tableHeaderCell}>6s</th>
                            <th className={scoreCardStyles.tableHeaderCell}>SR</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inn.batsmen.map((b, i) => (
                            <tr key={i} className={scoreCardStyles.tableRow}>
                              <td className={scoreCardStyles.tableCell}>
                                <div className={scoreCardStyles.batsmanName}>{b.name}</div>
                                {b.desc && <div className={scoreCardStyles.batsmanDesc}>{b.desc}</div>}
                              </td>
                              <td className={scoreCardStyles.tableCell}>{b.runs ?? '-'}</td>
                              <td className={scoreCardStyles.tableCell}>{b.balls ?? '-'}</td>
                              <td className={scoreCardStyles.tableCell}>{b.four ?? '-'}</td>
                              <td className={scoreCardStyles.tableCell}>{b.six ?? '-'}</td>
                              <td className={scoreCardStyles.tableCell}>{b.strikeRate ?? '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>