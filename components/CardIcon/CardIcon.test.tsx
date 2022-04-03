import {render, fireEvent, screen} from '@testing-library/react';
import { CardIcon } from './CardIcon';
import iconUser from '../../public/svg/icon-user.svg'

describe('<CardIcon />', () => {
  test('toMatchSnapshot', () => {
    const wrapper = render(
      <CardIcon
        label='Test User'
        route='/users'
        svgIcon={iconUser}
      />
      )
      expect(wrapper).toMatchSnapshot()
  })

  test('Display label in component', () => {
    const {queryByText} = render(
      <CardIcon
        label='Test user'
        route='/users'
        svgIcon={iconUser}
      />
    )
    const labelScreen = queryByText('Test user');
    expect(labelScreen).toBeInTheDocument()
  })

  test('Not sisplay label in component', () => {
    const {queryByText} = render(
      <CardIcon
        label='Test to user'
        route='/users'
        svgIcon={iconUser}
      />
    )
    const labelScreen = queryByText('Test User');
    expect(labelScreen).toBeNull()
  })
})