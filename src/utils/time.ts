// Adjusting the time to read.
// gatsby-transformer-remark plugin relies on the 265 average words per minute.
// @see: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/src/utils/time-to-read.js
export const timeToReadFromRemark = (
  remarkTimeToRead?: number | null | undefined,
): number | null => {
  if (typeof remarkTimeToRead !== 'number') {
    return null;
  }
  const timeToReadMultiplier = 1;
  const minTimeToRead = 1;
  return Math.ceil(remarkTimeToRead * timeToReadMultiplier) || minTimeToRead;
};

export const wait = async (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
