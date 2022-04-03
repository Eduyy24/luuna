import {render} from '@testing-library/react';
import IRepoModel from '../../../models/RepoModel';
import IUserModel from '../../../models/UserModel';
import {CardUser} from './CardUser'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
 */

const user: IUserModel = {
  login: 'Eduardo',
  avatar_url: 'https://image',
  html_url: 'https://image',
}

describe('<CardRepo />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<CardUser user={user} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Validate render of user value in component', () => {
    const {queryByText} = render(<CardUser user={user}/>)

    expect(queryByText(user.login)).toBeInTheDocument()
  })
})