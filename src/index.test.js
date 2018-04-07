import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  test: multiSnapshotWithOptions({
    // createNodeMock: (element) => {
    //   if (element.type === TextareaThatUsesRefs) {
    //     return document.createElement('textarea')
    //   }
    // },
  }),
});

describe('root level test', () => {
  it('should always pass', () => {
    expect(true).toEqual(true);
  });
});
