/**
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

'use strict';

module.exports = {
  source: {
    bowerDir: './bower_components',
    html: './src/index.html',
    js: './src/js/**/*.js',
    styl: './src/styl/**/*.styl',
    img: './src/images/**/*',
    files: {
      styl: './src/styl/saiku.styl'
    }
  },

  browserSync: {
    html: './build/**/*.html',
    css: './build/**/*.css',
    js: './build/**/*.js',
    img: './build/images/**/*'
  },

  build: {
    app: './build/saiku',
    html: './build/',
    css: './build/assets/css',
    js: './build/assets/js',
    img: './build/assets/images',
    fonts: './build/assets/fonts'
  },

  deploy: {
    pages: './build/**/*'
  }
};
