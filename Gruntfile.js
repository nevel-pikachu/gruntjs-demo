
// require('load-grunt-tasks')(grunt);
module.exports = function (grunt) {
  const sass = require('node-sass');
  // Configuration
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: false                 //Có sinh map
      },
      dist: {
        files: {
          'src/style/style.css': ['src/style/style.scss'],
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.{js,pug,scss}', 'Gruntfile.js', 'config/*.js'],
        tasks: ['default'],
        options: {
          spawn: false,
          interrupt: true,
          debounceDelay: 250,
          reload: true
        },
      },
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
        },
        files: [{
          expand: true,
          cwd: "src/images",
          src: ["**/*.{png,jpg,gif,svg}"],
          dest: "build/images"
        }]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/js/index.min.js': ['src/**/*.js'],
          // bootstrap 5 core js
          'build/js/boostrap.min.js': [
          'node_modules/bootstrap/js/dist/dom/data.js',
          'node_modules/bootstrap/js/dist/dom/event-handler.js',
          'node_modules/bootstrap/js/dist/dom/manipulator.js',
          'node_modules/bootstrap/js/dist/dom/selector-engine.js'
          ]
        }
      }
    },
    pug: {
      compile: {
        files: {
          'build/index.html': ['src/**/*.pug'],
        },
      }
    },
    minifyHtml: {
      options: {
        cdata: true
      },
      dist: {
        files: {
          'build/index.html': 'build/index.html'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/style.min.css': ['src/style/style.css']
        }
      }
    },
    minjson: {
      compile: {
        files: {
          // Minify one json file
          'build/static/footer/aboutus.json': 'src/static/footer/aboutus.json',
          // Concat/minify one.json and all json files within the data folder
          // If more than one json file is matched, json will be wrapped in brackets []
          // 'all.min.json': ['one.json', 'data/*.json']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-inline-css');
  // grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-minify-html');
  grunt.loadNpmTasks('grunt-minjson');

  grunt.registerTask('default', ['sass', 'cssmin', 'pug', 'minifyHtml', 'uglify', 'minjson', 'watch'])
  grunt.registerTask('build', ['imagemin', 'default'])
}