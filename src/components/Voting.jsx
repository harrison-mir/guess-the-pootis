const Voting = ({ players, descriptions, votes, onVote }) => {
  return (
    <div className="voting">
      <h2>Vote for the Impostor!</h2>
      <p>Based on the descriptions, who do you think is the impostor?</p>

      <div className="descriptions">
        <h3>Descriptions:</h3>
        {Object.entries(descriptions).map(([playerId, description]) => {
          const player = players.find(p => p.id === playerId);
          return (
            <div key={playerId} className="description">
              <strong>{player ? player.name : 'Unknown'}:</strong> {description}
            </div>
          );
        })}
      </div>

      <div className="vote-options">
        <h3>Vote:</h3>
        {players.map(player => (
          <button
            key={player.id}
            onClick={() => onVote(player.id)}
            disabled={votes[player.id] !== undefined}
            className="vote-button"
          >
            Vote for {player.name}
            {votes[player.id] !== undefined && ` (${votes[player.id]} votes)`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Voting;