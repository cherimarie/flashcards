import { Box, Grommet } from 'grommet';
import Deck from './components/Deck'

const colorSet = {
  navyBlue: "rgba(7, 7, 29, 1)",
  brightAqua: "rgba(42, 158, 187, 1)",
  veryLightAqua:  "rgba(197, 233, 242, 1)",
  lightestAqua: "rgba(197, 233, 242, .5)",
  lightPurple:  "rgba(206, 164, 234, 1)",
  lightestPurple:  "rgba(206, 164, 234, .5)"
}

const theme = {
  global: {
    colors: {
      ...colorSet,
      brand: colorSet.brightAqua,
      primary: colorSet.lightPurple,
      control: colorSet.navyBlue,
      text: colorSet.navyBlue
    },
    font: {
      family: "'Gentium Plus', serif"
    },
  },
  button: {
    color: colorSet.navyBlue,
    border: {
      width: '1px',
      radius: '2px',
      color: colorSet.lightestPurple
    },
    padding: {
      vertical: '.5em',
      horizontal: '1em',
    },
    primary: {
      color: colorSet.lightestPurple,
      border: { color: colorSet.navyBlue }
    }
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme} full>
      <AppBar>
        <h1>Your Flashcards</h1>
      </AppBar>
      <Box fill>
        <Deck />
      </Box>
    </Grommet>
  );
}

export default App;
