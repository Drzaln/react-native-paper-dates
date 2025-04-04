import renderer from 'react-test-renderer'
import CalendarHeader from '../../Date/CalendarHeader'

it('renders CalendarHeader', () => {
  const tree = renderer
    .create(
      <CalendarHeader
        locale={'en'}
        onPrev={() => null}
        onNext={() => null}
        scrollMode={'vertical'}
        startWeekOnMonday={false}
      />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
