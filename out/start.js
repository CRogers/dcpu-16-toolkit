(function() {
	var out = (typeof process === 'undefined' || !process.versions)
	          ? this.window || {}
	          : exports;
	
	out.dcpu = dcpu = {};
