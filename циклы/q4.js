function doSmth(a) {
    for (var q=1, i=1; q<a.length; ++q) {
      if (a[q] !== a[q-1]) {
        a[i++] = a[q];
      }
    }
  
    a.length = i;
    return a;
  }
  doSmth([7,3,4,5,67,8,7,7,77,7,7])