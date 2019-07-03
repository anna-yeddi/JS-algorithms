let shortestToChar = function(S, C) {
  let toRet = [], i = 0;

  while (i < S.length) {
    let el = S[i];

    if(el == C) {
      toRet.push(0);
    } else {
      // count R
      let r = i+1
      while (r < S.length) {
        let elR = S[r];

        if(elR == C) {
          toRet.push(r-i);
        }
        console.log(elR);
        r++;
      };

      toRet.push(el);
    };

    i++;
  }

  return toRet;
};

// console.log(shortestToChar('loveleetcode', 'e'));
  // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]



  class Polygon {
    constructor(width, height) {
     var width = width;
     var height = height;
    }
  }
  
  class Rectangle extends Polygon {
    constructor(width, height) {
     super(width, height);
       this._color = '';
    }
  
    get area() {
      return this.width * this.height;
    }
    get color() {
      return this._color;
    }
    set color(value) {
      this._color = value;
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
      this._color = '';
    }
  
    get area() {
     return super.area;
    }
    get color() {
      return this._color;
    }
    set color(value) {
      this._color = value;
    }
  }
  let r1 = new Rectangle(2,3);
  
  /* console message #1 */
  console.log('area = ' + r1.area);
  
  r1.color = 'red';
  
  /* console message #2 */
  console.log('color = ' + r1.color);
  
  let s1 = new Square(10);
  
  /* console message #3 */
  console.log('square side = ' + s1.side);
  
  /* console message #4 */
  console.log('square area = ' + s1.area);

function test(a, b) {
  return (a * b)+(a + b);
}

var a = 1;
var b = 2;
var c = test(a,b);
console.log(typeof(c));


// Function:

  function runValidate(form) {
    var strRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!strRegexp.test(form.txtemail.value)) {
      alert("Please enter a valid email address, eg. name@mycompany.com");
      return (false);
      form. txtemail.focus();
    } else {
      return (true);
    }
  }


// Form:
/* <body>
  <form name="Validate" action="Default.html">
    Enter your name :  <input type="text" name ="txtName" size="20"/> <br />
    Enter your email address : <input type = "text" name="txtemail" size="20"/> <br />
    Re-enter your email address : <input type = "text" name="txtemail2" size="20"/> <br />
    <input type="button" name="Validate" value="Validate" onClick="runValidate (form)"/>
  </form>
</body> */

var total=0;
for (var x = 1; x < 5; x = x << 1) {
  total += x;
} 
// document.write(total);
console.log(total);

var data = [ [1 , 2, 3, [4, [5,6,14]]], [8, [9, 18, [11, [12]], 13]]];
function test(data, elem) {
    if (typeof data == "number") {
        return (!elem || data > elem)?data:elem;
    } else {
        for (var i=0; i<data.length; i++) {
            elem = test(data[i], elem);
        }
        return elem;
    }
}
var result = test(data);
console.log(result);