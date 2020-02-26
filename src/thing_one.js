import React from 'react'
import ThingTwo from './thing_two'

class ThingOne extends React.Component{
  constructor(props) {
    super(props)
    this.ref1 = React.createRef()

    // if you don't bind your method then boxChecked will be called
    // without `this` in scope
    this.boxChecked = this.boxChecked.bind(this)
  }
  boxChecked(event) {
    console.log(this.ref1)
    const dom_elem = this.ref1.current
    alert("ThingTwo is " + dom_elem.getBoundingClientRect())
  }

  render() {
    return (
      <div style={{position: 'relative', border: 'solid 1px green'}}>
        this is an experiment into forwarded refs
        <br />
        Please <button onClick={this.boxChecked} type="button" > click here </button>

        <ThingTwo ref={this.ref1}/>
      </div>
    )
  }
}

export default ThingOne