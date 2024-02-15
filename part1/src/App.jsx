import { useState } from "react";

// const Header = () => {
//   return <h1>give feedback</h1>;
// };

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const Statistics = (props) => {
//   const { good, neutral, bad } = props;

//   const total = good + neutral + bad;
//   const average = total === 0 ? 0 : (good - bad) / total;
//   const positivePercentage = total === 0 ? 0 : (good / total) * 100;

//   if (total === 0) {
//     <div>no feedback given</div>;
//   }
//   return (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <td>good</td>
//             <td>{good}</td>
//           </tr>
//           <tr>
//             <td>neutral</td>
//             <td>{neutral}</td>
//           </tr>
//           <tr>
//             <td>bad</td>
//             <td>{bad}</td>
//           </tr>
//           <tr>
//             <td>all</td>
//             <td>{total}</td>
//           </tr>
//           <tr>
//             <td>average</td>
//             <td>{isNaN(average) ? 0 : average}</td>
//           </tr>
//           <tr>
//             <td>positive</td>
//             <td>{isNaN(positivePercentage) ? 0 : positivePercentage} %</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // const handleGoodClick = () => {
  //   setGood(good + 1);
  // };

  // const handleNeutralClick = () => {
  //   setNeutral(neutral + 1);
  // };

  // const handleBadClick = () => {
  //   setBad(bad + 1);
  // };

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handlePoints = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  }

  const maxIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      {/* <Header />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} /> */}
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <button onClick={handlePoints}>vote</button>
      <button onClick={getRandomNumber}>next anecdote</button>
      <h1>Anecdotes with most votes</h1>
      {anecdotes[maxIndex]}
      <p>has {votes[maxIndex]} votes</p>
    </div>
  );
};

export default App;
