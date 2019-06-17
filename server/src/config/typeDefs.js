import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typesDefs = fileLoader(`${path.resolve(__dirname, './')}/schema/**/*.graphql`);

export default mergeTypes(typesDefs, { all: true });
