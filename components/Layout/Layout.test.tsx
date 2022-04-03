import {render, fireEvent, screen} from '@testing-library/react';
import { Layout} from './Layout'

describe('<CardIcon />', () => {
  test('toMatchSnapshot', () => {
    const {queryByText} = render(
      <Layout>
        <span>Test render</span>
      </Layout>
    )
    const children = queryByText('Test render');
    expect(children).toBeInTheDocument()
  })
})