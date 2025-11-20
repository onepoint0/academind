import Player from './components/Player.jsx';
import { Timer } from './components/Timer.jsx';

const challenges = [
  {
    title: 'EASY',
    duration: 1,
  },
  {
    title: 'NOT EASY',
    duration: 5,
  },
  {
    title: 'GETTING TOUGH',
    duration: 10,
  },
  {
    title: 'PRO',
    duration: 15,
  }
]

function App() {
  return (
    <>
      <Player />
      <section id="challenges">
        {challenges.map(c => <Timer key={c.title} title={c.title} duration={c.duration} />)}
      </section>
    </>
  );
}

export default App;
