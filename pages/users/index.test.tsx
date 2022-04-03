import {render} from '@testing-library/react';
import IUserModel from '../../models/UserModel';
import Users from './index'

/*
  Las prubas para las Page de momento solo incluye de tipo toMatchSnapshot
  dado que las pruebas E2E validarian mas eficientemente su comportamiento
*/

const users: IUserModel[] = [{
  login: 'Eduardo',
  avatar_url: 'https://image',
  html_url: 'https://image',
}]

describe('<Users />',()=>{
  test('toMatchSnapshot', () => {
    const {asFragment} = render(<Users someUsers={users} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
