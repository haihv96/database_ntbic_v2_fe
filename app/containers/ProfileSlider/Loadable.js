/**
 *
 * Asynchronously loads the component for ProfileSlider
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
