module.exports = function(grunt) {

    /*
     * Variables globales para ruta del tema para tours
     */
    var theme = 'wp-content/themes/toursChildren/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            dev: {
                bsFiles: { 
                    src : [
                        theme+'*.php',
                        theme+'**/*.php',
                        theme+'js/*.js', 
                        theme+'*.css',
                    ] 
                },
                options: {
                    https: true,
                    proxy: "localhost/tours/",
                    files: ['style.css', 'js/*.js', '**/*.php'],
                    watchTask: true, 
                }
            }
        }, /* browserSync */
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'wp-content/themes/toursChildren/style.css' : 'wp-content/themes/toursChildren/components/sass/style.scss'
                }
            }
        }, /* sass */
        uglify: {
            dist: {
                files: { 
                    'wp-content/themes/toursChildren/js/script.js': ['wp-content/themes/toursChildren/components/js/script.js'],
                    // '/localhost/htdocs/www/tours/wp-content/themes/toursChildren/js/plugins.min.js': [
                    //     // 'components/plugins/js/enquire.js'
                    // ]
                }
            }
        }, /* uglify */


        // imagemin: {
        //     dynamic: {
        //         files: [{
        //             expand: true,
        //             cwd: 'components/img/',
        //             src: ['**/*.{png,jpg,gif}'],
        //             dest: 'img/'
        //         }]
        //     }
        // }, /* imagemin */


        /*======== watch ========*/
        watch: {
            css: {
                files: '**/**/**/**/*.scss',
                tasks: ['sass']
            }, /* css */

            js: {
                files: '**/**/**/js/*.js',
                tasks: ['uglify']
            }, /* js */

            pluginsJs: {
                files: '**/**/**/js/*.js',
                tasks: ['plugin']
            },

            images: {
                files: ['**/**/**/img/*.{png,jpg}'],
                tasks: ['newer:imagemin'],
                options: {
                    spawn: false,
                }
            }  /* images-watch */
        } /* watch */
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('dev', ['sass', 'uglify', 'browserSync', 'watch']);
}
