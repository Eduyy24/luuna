import {render, fireEvent, screen} from '@testing-library/react';
import { CardSearch} from './CardSearch'

describe('<CardIcon />', () => {
  test('resolve event onCLick and onChange', () => {
    const onChange = jest.fn()
    const onClick = jest.fn()

    const {getByPlaceholderText, getByTestId} = render(
      <CardSearch
        title='test title'
        onChangeInput={onChange}
        onClickSearch={onClick}
        isLoading
      >
        <span>Test render</span>
      </CardSearch>
    )
    const input = getByPlaceholderText('Buscar')
    const btnSearch = getByTestId('btnSearch')
    fireEvent.change(input, {target: {value: 'Hola'}})
    fireEvent.click(btnSearch)
    // const children = queryByText('Test render');
    expect(onChange).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalled()
  })

  test('Display title and render children in component', () => {
    const onChange = jest.fn()
    const onClick = jest.fn()

    const {queryByText} = render(
      <CardSearch
        title='Test title'
        onChangeInput={onChange}
        onClickSearch={onClick}
        isLoading={false}
      >
        <span>Test render</span>
      </CardSearch>
    )
    const children = queryByText('Test render');
    const title = queryByText('Test title');
    expect(children).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})