/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    responsive_images: {
      dev: {
        options: {
          // Task-specific options go here.
          sizes: [
            {
              name: '640',
              width: 640
            },
            {
              name: '768',
              width: 768
            },
            {
              name: '1024',
              width: 1024
            }
          ]
        },
        files: [
          {
            expand: true,
            src: ['**.{jpg,gif,png}'],
            cwd: 'images_src',
            dest: 'images'
          }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-responsive-images');
  // Default task.
  grunt.registerTask('default', ['responsive_images']);
};
