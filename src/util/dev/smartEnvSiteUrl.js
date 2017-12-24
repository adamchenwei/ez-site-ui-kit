import site from '../../components/ContentCache/site';

module.exports = function smartEnvSiteUrl(hostName) {
  if (hostName === 'localhost') {
    return site.domain.development.name;
  }
  return `${site.domain.https ? 'https://' : 'http://'}${site.domain.name}${site.domain.space}`;

}
