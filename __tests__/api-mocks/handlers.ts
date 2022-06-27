import {rest} from 'msw';
import {MAIN_URL} from '../../src/constants';
import VideosMockData from './VideosMockData';

const getVideosUrl = `${MAIN_URL}/XiteTV/frontend-coding-exercise/main/data/dataset.json`;

const getVideosHandler = rest.get(getVideosUrl, async (req, res, ctx) => {
  return res(ctx.json(VideosMockData));
});

export const tasksHandlerException = rest.get(
  getVideosUrl,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({message: 'Deliberately broken request'})),
);

export const handlers = [getVideosHandler];
