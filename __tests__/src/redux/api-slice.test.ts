import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import {getVideos} from '../../../src/redux/api-slice';
import videosData from '../../api-mocks/VideosMockData';
const mockStore = configureStore([thunk]);

it('check videos api', () => {
  const store = mockStore({});

  return store.dispatch(getVideos()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual('api/videos/pending');
    expect(actions[1].payload.toString()).toEqual(videosData.toString());
  });
});
