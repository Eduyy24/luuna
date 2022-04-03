import {render, screen} from '@testing-library/react';
import {Footer} from './Footer'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
 */
describe('<Footer />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
