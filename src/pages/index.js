// Step 1: Import React
import * as React from 'react'
import 'spec-ods'

// Step 2: Define your component

const array = [
  {
    label: 'Accordion 1',
    description: 'Lorem ipsum',
    color: '#439ECA',
    width: '300px'
  },
  {
    label: 'Accordion 2',
    description: 'Lorem ipsum',
    color: '#7EC74A',
    width: '300px'
  },
  {
    label: 'Accordion 3',
    description: 'Lorem ipsum',
    color: '#F8CD41',
    width: '300px'
  }
]

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <plain-button>Hello</plain-button>
      <div className="App">
        {
          array.map((array) => {
            return (
              <my-accordion 
              label={array.label}
              description={array.description}
              color={array.color}
              width={array.width}>
              </my-accordion>
            )})
        }
      </div>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage
