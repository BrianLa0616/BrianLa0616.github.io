var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

function viewtab(evt, name) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-salmon", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-salmon";
}

function show(n) {
	var det;
	if (n==1) {
		det = document.getElementById("hope");}
	if (n==2) {
		det = document.getElementById("topaz");}
	if (n==3) {
		det = document.getElementById("pamf");}
	if (n==4) {
		det = document.getElementById("muse");}
	if (n==5) {
		det = document.getElementById("bell");}
	if (n==6) {
		det = document.getElementById("amase");}
	if (n==61) {
		det = document.getElementById("amase1");}
	if (n==7) {
		det = document.getElementById("tkd");}
	if (n==8) {
		det = document.getElementById("pygram");}
	if (n==9) {
		det = document.getElementById("aca");}
	if (n==10) {
		det = document.getElementById("kschool");}
	if (n==11) {
		det = document.getElementById("ref");}
    $(det).show();
};

function hide(n) {
	var det;
	if (n==1) {
		det = document.getElementById("hope");}
	if (n==2) {
		det = document.getElementById("topaz");}
	if (n==3) {
		det = document.getElementById("pamf");}
	if (n==4) {
		det = document.getElementById("muse");}
	if (n==5) {
		det = document.getElementById("bell");}
	if (n==6) {
		det = document.getElementById("amase");}
	if (n==61) {
		det = document.getElementById("amase1");}
	if (n==7) {
		det = document.getElementById("tkd");}
	if (n==8) {
		det = document.getElementById("pygram");}
	if (n==9) {
		det = document.getElementById("aca");}
	if (n==10) {
		det = document.getElementById("kschool");}
	if (n==11) {
		det = document.getElementById("ref");}
    $(det).hide();
};



