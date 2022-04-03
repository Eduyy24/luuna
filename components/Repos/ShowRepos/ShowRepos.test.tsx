import {render} from '@testing-library/react';
import IRepoModel from '../../../models/RepoModel';
import {ShowRepos} from './ShowRepos'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
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


describe('<ShowRepos />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<ShowRepos title='Resultado test' repos={repos} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Validate render of repo values in component', () => {
    const {queryByText} = render(<ShowRepos  title='Resultado test' repos={repos}/>)

    expect(queryByText(repos[0].name)).toBeInTheDocument()
    expect(queryByText(repos[0].description)).toBeInTheDocument()
    expect(queryByText(repos[0].language)).toBeInTheDocument()
    expect(queryByText(repos[0].owner.login)).toBeInTheDocument()
  })
})