import { ApolloServer } from 'apollo-server';
import chalk from 'chalk';
import apollo from '~/config/apollo';

const Server = new ApolloServer(apollo);

if (process.env.NODE_ENV !== 'test') {
  Server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(chalk.green(`Server ready at ${url}`));
  });
}

export default Server;
