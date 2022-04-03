import {render} from '@testing-library/react';
import IUserModel from '../../../models/UserModel';
import {ShowUsers} from './ShowUsers'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
 */

const users: IUserModel[] = [{
  login: 'Eduardo',
  avatar_url: 'https://image',
  html_url: 'https://image',
}]


describe('<ShowUsers />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<ShowUsers title='Resultado test' users={users} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Validate render of repo values in component', () => {
    const {queryByText} = render(<ShowUsers  title='Resultado test' users={users}/>)

    expect(queryByText(users[0].login)).toBeInTheDocument()
  })
})