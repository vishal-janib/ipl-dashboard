// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachCards} = props
  const {
    matchStatus,
    secondInnings,
    firstInnings,
    competingTeamLogo,
    competingTeam,
    venue,
    date,
    manOfTheMatch,
    result,
    umpires,
  } = eachCards
  return (
    <li className="each-Team-cards">
      <img
        className="competingTeamLogo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <p className="competingTeam">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="matchStatus">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
