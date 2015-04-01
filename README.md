Re: this issue - https://github.com/webpack/karma-webpack/issues/44

To repro,

```
npm install -g karma-cli
git clone https://github.com/alanctkc/karma-webpack-watch-bug-repro.git
cd karma-webpack-watch-bug-repro
npm install
karma start
```

Karma will begin autowatching the-test.spec.js for changes. To simulate changes (10 touches, 2 seconds apart):

```
./simulatechanges
```

Some watches will probably fire twice.

Remove the karma-webpack preprocessor from the karma config [here](https://github.com/alanctkc/karma-webpack-watch-bug-repro/blob/master/karma.conf.js#L20). Then, kill and re-start karama and run the simulation again.

```
karma start
```

```
./simulatechanges
```

There should be no duplicate test runs.
