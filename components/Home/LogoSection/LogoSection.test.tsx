import {render} from '@testing-library/react';
import {LogoSection} from './LogoSection'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
 */
describe('<LogoSection />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<LogoSection />)
    expect(wrapper).toMatchSnapshot()
  })
})
