module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            'Scripts/build/Calculator.min.js': 'Scripts/Calculator.js'
        },
        qunit: {
            all: ['Scripts/Test/index_grunt.htm']
        },
        jshint: {
            all: ['Scripts/Calculator.js', 'Scripts/test.js']
        },
        /*blanket_qunit: {
            all: {
                options: {
                    urls: ['Scripts/Test/index_grunt.htm?coverage=true'],
                    threshold: 90
                }
            }
        },*/
        watch: {
            files: ['tests/*.htm', 'Scripts/*.js'],
            tasks: ['jshint', 'qunit', 'uglify']
        },
    });

    grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);

    // carrega plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-blanket-qunit');
};