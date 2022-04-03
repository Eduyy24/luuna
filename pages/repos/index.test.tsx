import {render} from '@testing-library/react';
import IRepoModel from '../../models/RepoModel';
import Repos from './index'

/*
  Las prubas para las Page de momento solo incluye de tipo toMatchSnapshot
  dado que las pruebas E2E validarian mas eficiente su comportamiento
*/

const repos: IRepoModel[] = [{
  name: 'luma-project',
  owner: {
    login: 'Eduardo',
    avatar_url: 'https://image',
    html_url: 'https://image',
  },
  description: 'El mejor Repo',
  html_url: 'https://image',
  language: 'Java'
}]

describe('<Repos />',()=>{
  test('toMatchSnapshot', () => {
    const {asFragment} = render(<Repos someRepos={repos} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
