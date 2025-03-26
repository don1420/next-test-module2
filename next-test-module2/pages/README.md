### Every module have to contain `pages` folder

To implement inheritance logic of [Flux] Headless Framework during application build files from: `/vendor/pages/`,
`/vendor-b2b/pages/`, `/flux_modules/*/pages/`, `/overrides/pages/` are merging to `/pages/`
directory which is using during application build.

`/vendor/pages/` directory has the 4th priority (lowest)
`/vendor-b2b/pages/` directory has the 3rd priority
`/flux_modules/MODULE_NAME/pages/` directory has the 2nd priority
`/overrides/pages/` directory has the 1st priority (highest)