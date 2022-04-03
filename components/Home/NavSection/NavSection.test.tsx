import {render} from '@testing-library/react';
import {NavSection} from './NavSection'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
 */
describe('<NavSection />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<NavSection />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Validate render of <CardIcon /> component', () => {
    const {queryByText} = render(<NavSection />)
    const lblRepo = queryByText('Buscar Repositorio');
    const lblUser = queryByText('Buscar Usuario');

    expect(lblRepo).toBeInTheDocument()
    expect(lblUser).toBeInTheDocument()
  })
})
