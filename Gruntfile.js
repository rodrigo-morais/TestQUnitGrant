module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
            },
            dist: {
                src: ['Scripts/Calculator.js', 'Scripts/test.js'],
                dest: 'Scripts/build/TestQUnitGrant.js',
            },
        },
        uglify: {
            'Scripts/build/TestQUnitGrant.min.js': 'Scripts/build/TestQUnitGrant.js'
        },
        qunit: {
            all: ['Scripts/Test/index_grunt.htm']
        },
        jshint: {
            beforeconcat: ['Scripts/Calculator.js', 'Scripts/test.js'],
            afterconcat: ['Scripts/build/TestQUnitGrant.js']
        },
        watch: {
            files: ['tests/*.htm', 'Scripts/*.js'],
            tasks: ['jshint', 'qunit', 'uglify']
        },
    });

    grunt.registerTask('default', ['concat', 'jshint', 'qunit', 'uglify']);

    // carrega plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};