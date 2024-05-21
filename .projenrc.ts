import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  packageName: 'rsi-cdk-lib',
  author: 'Roberto Trapletti',
  authorAddress: 'roberto.trapletti@rsi.ch',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'rsi-cdk-lib',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/rsi-team-multimedia/rsi-cdk-lib.git',
  releaseToNpm: true,
  npmTokenSecret: 'NPM_TOKEN',
  npmAccess: NpmAccess.PUBLIC,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
});
project.synth();