import { useState } from 'react';
import getRandomItem from './randNum';
import './EightBall.css'

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** EightBall
 *
 *  Props:
 *    - answers [{msg: ..., color: ...}, ...]
 *
 *  State:
 *    -setMsg: String
 *    -setColor: String
 *
 *  App -> EightBall
 */

function EightBall({answers=ANSWERS}) {
  const defaultAnswer = {msg: 'Think of a question', color: 'Black'};
  const [answer, setAnswer] = useState(defaultAnswer);


  /** handleClick
   *
   * calls getRandomItem on answers
   * updates state of msg and color
   */

  function handleClick(evt) {
    const newAnswer = getRandomItem(answers);
    setAnswer(newAnswer);
  }

  const myStyle = {
    backgroundColor : answer.color
  }

  return (
    <div className="EightBall" style={myStyle} onClick={handleClick}>
      <p className="EightBall-message">{answer.msg}</p>
    </div>
  )
}

export default EightBall;