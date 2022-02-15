import { resolve, join } from 'path';
import { addAliases } from 'module-alias';

const files = resolve(__dirname, '..');

addAliases({
  '@resolvers': join(files, 'resolvers')
});