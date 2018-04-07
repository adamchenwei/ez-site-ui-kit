import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  test: multiSnapshotWithOptions({}),
});

describe('root level test', () => {
  it('should always pass', () => {
    expect(true).toEqual(true);
  });
});
