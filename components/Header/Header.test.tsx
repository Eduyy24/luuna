import {render} from '@testing-library/react';
import {Header} from './Header'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
 */
describe('<Header />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})