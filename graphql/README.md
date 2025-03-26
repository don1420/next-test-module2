### Every module have to contain `graphql` folder

To implement inheritance logic of [Flux] Headless Framework during application build files from: `/vendor/graphql/`,
`/vendor-b2b/graphql/`, `/flux_modules/MODULE_NAME/graphql/`, `/overrides/graphql/` are merging to `/graphql/` directory which is using during application build.

`/vendor/graphql/` directory has the 4th priority (lowest)
`/vendor-b2b/graphql/` directory has the 3rd priority
`/flux_modules/MODULE_NAME/graphql/` directory has the 2nd priority
`/overrides/graphql/` directory has the 1st priority (highest)