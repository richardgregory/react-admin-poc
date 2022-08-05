import { Admin, Resource } from 'react-admin'
import { EventList, EventEdit } from './components/events'
import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider({
  events: [
    {
      id: '1',
      type: 'mixpanel',
      eventName: 'WorkerMyJobsPage.Landed',
    },
    {
      id: '2',
      type: 'mixpanel',
      eventName: 'WorkerMyJobsPage.Viewed',
      description: 'Desc goes here'
    },
    {
      id: '3',
      type: 'mixpanel',
      eventName: 'BrowsePage.Landed',
      description: 'Desc goes here'
    }
  ]
})

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="events" list={EventList} edit={EventEdit} />
  </Admin>
)

export default App;
