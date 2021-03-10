import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import SaladContext from '../context/SaladContext'

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 50,
    '& li': {
      width: 100
    }
  },
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    padding: 25,
  }
});

const SaladSummary = () => {
  const { salad } = useContext(SaladContext)
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        {salad.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SaladSummary