import generatePublishPackageJson from '@niche-works/dev/generatePublishPackageJson';

generatePublishPackageJson({
  exports: {
    '.': { types: './index.d.ts' },
  },
  jsonWriteOptions: {
    spaces: 2
  }
});
