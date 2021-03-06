import React from 'react'
import Alert from './alert/Alert'
import CartSuccess from './cartSuccess/CartSuccess'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    padding: 20
  }
})

const Wrapper = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <h1>Styling react component</h1>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>

      <CartSuccess />
    </div>
  )
}

export default Wrapper
