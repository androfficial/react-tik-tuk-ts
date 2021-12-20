/* eslint-disable prefer-regex-literals */
const regexp = new RegExp('#([^\\s]*)', 'g');

const stringFormatting = (str: string) => str.replace(regexp, '');

export default stringFormatting;
