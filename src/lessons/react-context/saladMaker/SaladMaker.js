import { useReducer } from 'react'
import { createUseStyles } from 'react-jss'
import SaladBuilder from '../saladBuilder/SaladBuilder'
import SaladSummary from '../saladSummary/SaladSummary'
import SaladContext from '../context/SaladContext'

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center'
  }
})

const reducer = (state, item) => [...state, item]

const SaladMaker = () => {
  const [salad, setSalad] = useReducer(reducer, [])
  const classes = useStyles()

  return (
    <SaladContext.Provider value={{ salad, setSalad }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
        Build Your Custom Salad!
        <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </SaladContext.Provider>
  )
}

export default SaladMaker
