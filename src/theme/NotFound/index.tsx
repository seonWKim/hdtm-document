import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

// Redirect to the introduction page whenever user visits invalid page
export default function NotFoundWrapper(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    history.push('/hdtm-document/docs/intro');
  }, [history]);

  return null;
}
