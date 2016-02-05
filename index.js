'use strict'

exports.directories = function () {
  return [
    '.git', // Git repository files, see <https://git-scm.com/>
    '.sass-cache', // Cache folder for node-sass, see <https://github.com/sass/node-sass>
    'bower_components', // Where Bower packages are installed, see <http://bower.io/>
    'node_modules' // Where Node modules are installed, see <https://nodejs.org/>
  ]
}
