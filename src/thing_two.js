import React from 'react'

class ThingTwo extends React.Component{
  render() {
    const {selfRef} = this.props

    return (
      <div ref={selfRef} style={{position: 'relative', top: 0, left: 0, border: 'solid 1px red'}}>
         This is thing Two
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => <ThingTwo {...props} selfRef={ref}  />)