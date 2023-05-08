const colorCode = [
  "white",
  "yellow",
  "red",
  "blue",
  "green",
    "purple"


];

const SkillCell = (props) => {
    return <td className={`level` + props.score} >{props.score}</td>
}

export default SkillCell