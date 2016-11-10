import ng from 'angular';


export default ng.module('app.directives.focusMe', [])
  .directive('focusMe', $timeout =>
    ({
      link: (scope, element, attrs) => {
        scope.$watch(attrs.focusMe, (value) => {
          if (value === true) {
            $timeout(() => {
              element[0].focus();
              scope[attrs.focusMe] = false;
            }, 0);
          }
        });
      }
    })
  )
  .name;
