const colorCode = [
  "white",
  "yellow",
  "red",
  "blue",
  "green",
    "purple"


];

const SkillCell = (props) => {


    return <td style={{"backgroundColor":colorCode[props.score]}}>{props.score}</td>
}

export default SkillCell