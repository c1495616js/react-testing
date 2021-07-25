import React from 'react'
import {render, screen} from '@testing-library/react'
import {reportError as mockReportError} from '../../api'
import {ErrorBoundary} from './error-boundary'



function Bomb({shouldThrow}) {
  if (shouldThrow) {
    throw new Error('💣')
  } else {
    return null
  }
}

test('calls reportError and renders that there was a problem', () => {
    const {rerender} = render(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>,
  )

  rerender(
    <ErrorBoundary>
      <Bomb shouldThrow={true} />
    </ErrorBoundary>,
  )

  expect(screen.getByRole('alert')).toHaveTextContent('problem');
})

// this is only here to make the error output not appear in the project's output
// even though in the course we don't include this bit and leave it in it's incomplete state.
beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })
  
