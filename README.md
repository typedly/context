
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/context"
  />
</a>

## typedly/context

A TypeScript type definitions package for context data structures.

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

<br>

## Table of contents

* [Installation](#installation)
* [Api](#api)
  * ActionContext
  * ErrorContext
  * Context
  * RequestContext
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

## Installation

```bash
npm install @typedly/context
```

## Api

```typescript
import {
  ActionContext,
  ErrorContext,
  Context,
  RequestContext
} from '@typedly/context';
```

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/context
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/context
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/context
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/context
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/context/issues
  [typedly-forks]: https://github.com/typedly/context/network
  [typedly-license]: https://github.com/typedly/context/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/context/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fcontext.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fcontext

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
