import {www___naturalorchards__us as ContentCache} from 'ez-site-content';
const {site} = ContentCache;
module.exports = function smartEnvSiteUrl(hostName) {
  if (hostName === 'localhost') {
    return site.domain.development.name;
  }
  return `${site.domain.https ? 'https://' : 'http://'}${site.domain.name}${site.domain.space}`;

}
