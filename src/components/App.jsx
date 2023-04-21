import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import Home from './pages/Home';
import Tweets from './pages/Tweets';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
