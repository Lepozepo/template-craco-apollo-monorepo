import { ApolloServer } from 'apollo-server';
import Server from './index';

describe('Server', () => {
  it('runs without crashing', () => {
    expect(Server).toBeInstanceOf(ApolloServer);
  });
});
