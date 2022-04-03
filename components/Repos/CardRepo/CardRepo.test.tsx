import {render} from '@testing-library/react';
import IRepoModel from '../../../models/RepoModel';
import {CardRepo} from './CardRepo'

/**
 * Dado que es un componente estático solo realizo una prueba de Snapshot
 */

const repo: IRepoModel = {
  name: 'luma-project',
  owner: {
    login: 'Eduardo',
    avatar_url: 'https://image',
    html_url: 'https://image',
  },
  description: 'El mejor Repo',
  html_url: 'https://image',
  language: 'Java'
}

describe('<CardRepo />',()=>{
  test('toMatchSnapshot', () => {
    const wrapper = render(<CardRepo repo={repo} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Validate render of repo values in component', () => {
    const {queryByText} = render(<CardRepo repo={repo}/>)

    expect(queryByText(repo.name)).toBeInTheDocument()
    expect(queryByText(repo.description)).toBeInTheDocument()
    expect(queryByText(repo.language)).toBeInTheDocument()
    expect(queryByText(repo.owner.login)).toBeInTheDocument()
  })
})
