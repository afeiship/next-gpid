#angular-isloading
AngularJS directive that provide `a boolean value` to know $http hasn&#39;t had a response or not.


##usage:
+ html part:
```html
<div class="loading-widget"
     isloading
     loading="loading"
     data-visible="{{loading}}"
>
  <img src="svg/default.svg" alt="">
</div>

```
+ javascript part:
```javascript
  angular.module('TestApp', ['nx.widget']);

  angular.module('TestApp').
  controller('MainCtrl', function ($http, $q, $rootScope) {
    $rootScope.loading = false;
    var s1 = $http.get('http://www.baidu.com');
    var s2 = $http.get('http://www.sina.com');
    var s3 = $http.get('http://www.163.com');
    var s4 = $http.get('http://www.qq.com');
    var s5 = $http.get('http://www.hao123.com');

    //you need a svn if you're a chinese
    var s6 = $http.get('https://www.google.com/');


    $q.all([s1, s2, s3, s4, s5, s6]).then(function (responses) {
      console.log(responses);
    })


  });

```

+ description:

  - <div class="loading-widget"
  -      isloading                  <!--1.attach the directive-->
  -      loading="loading"          <!--2.write the scope.loading to the app.$rootScope-->
  -      data-visible="{{loading}}" <!--2.read loading props for CSS-->
  - >
  -   <img src="svg/default.svg" alt="">
  - </div>
