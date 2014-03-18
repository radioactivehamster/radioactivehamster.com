/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'any-old-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-pavitra-s-tandon-only-goodness' : '&#xe000;',
			'icon-ian-yates-y-fronts' : '&#xe001;',
			'icon-pavitra-s-tandon-chat-for-lovers' : '&#xe002;',
			'icon-muhamad-bahrul-ulum-log-out' : '&#xe003;',
			'icon-muhamad-bahrul-ulum-log-in' : '&#xe004;',
			'icon-justin-skull-ribbon' : '&#xe005;',
			'icon-justin-burns-skull' : '&#xe006;',
			'icon-justin-burns-skull-badge' : '&#xe007;',
			'icon-designmodo-settings' : '&#xe008;',
			'icon-designmodo-location' : '&#xe009;',
			'icon-designmodo-like' : '&#xe00a;',
			'icon-cole-townsend-pencil' : '&#xe00b;',
			'icon-cole-townsend-check' : '&#xe00c;',
			'icon-cole-townsend-chat' : '&#xe00d;',
			'icon-ian-yates-porridge' : '&#xe00e;',
			'icon-ian-yates-mr-whippy' : '&#xe00f;',
			'icon-ian-yates-milk' : '&#xe010;',
			'icon-aleks-dorohovich-rocket' : '&#xe011;',
			'icon-vincent-gschwindemann-sun' : '&#xe012;',
			'icon-vectortuts-pirate-panda' : '&#xe013;',
			'icon-sanjit-saha-afro' : '&#xe014;',
			'icon-samuel-sosina-command-line' : '&#xe015;',
			'icon-quin-robinson-casual-shoe' : '&#xe016;',
			'icon-michael-howarth-tardis' : '&#xe017;',
			'icon-kenneth-bielinski-timer' : '&#xe018;',
			'icon-juan-ortiz-zaforas-plug-f-female' : '&#xe019;',
			'icon-juan-ortiz-zaforas-plug-c-female' : '&#xe01a;',
			'icon-juan-gomez-alzaga-rocking-horse' : '&#xe01b;',
			'icon-juan-gomez-alzaga-paint-brush' : '&#xe01c;',
			'icon-juan-gomez-alzaga-leaf' : '&#xe01d;',
			'icon-juan-gomez-alzaga-bird' : '&#xe01e;',
			'icon-jeffrey-herrera-beer-mug' : '&#xe01f;',
			'icon-jack-rugile-anchor' : '&#xe020;',
			'icon-ilias-ismanalijev-batman' : '&#xe021;',
			'icon-corinne-ducusin-doumbek' : '&#xe022;',
			'icon-aleks-dorohovich-triforce' : '&#xe023;',
			'icon-steve-debeus-farm' : '&#xe024;',
			'icon-patrik-larsson-pokemon' : '&#xe025;',
			'icon-patrik-larsson-pakman' : '&#xe026;',
			'icon-ordog-zoltan-canon' : '&#xe027;',
			'icon-johana-barretto-kitty' : '&#xe028;',
			'icon-johana-barretto-kitty-stripy' : '&#xe029;',
			'icon-jj-moi-manga-poison' : '&#xe02a;',
			'icon-jj-moi-manga-eye' : '&#xe02b;',
			'icon-jj-moi-kneel' : '&#xe02c;',
			'icon-dom-waters-speedo' : '&#xe02d;',
			'icon-dom-waters-knife' : '&#xe02e;',
			'icon-derek-mui-tie' : '&#xe02f;',
			'icon-derek-mui-invader' : '&#xe030;',
			'icon-darren-reay-telephone-box' : '&#xe031;',
			'icon-darren-reay-pen-nib' : '&#xe032;',
			'icon-arno-hattingh-park' : '&#xe033;',
			'icon-anton-boshoff-headset' : '&#xe034;',
			'icon-joshua-barker-landscape' : '&#xe035;',
			'icon-joshua-barker-house' : '&#xe036;',
			'icon-jory-raphael-cart' : '&#xe037;',
			'icon-johan-manuel-hernandez-record-player' : '&#xe038;',
			'icon-danis-lou-joystick' : '&#xe039;',
			'icon-christina-pedersen-walkman' : '&#xe03a;',
			'icon-christina-pedersen-cassette' : '&#xe03b;',
			'icon-chris-spittles-unpinned' : '&#xe03c;',
			'icon-chris-spittles-save' : '&#xe03d;',
			'icon-chris-spittles-pinned' : '&#xe03e;',
			'icon-chris-spittles-health' : '&#xe03f;',
			'icon-chris-spittles-geo-location' : '&#xe040;',
			'icon-cesgra-globe' : '&#xe041;',
			'icon-matt-hakes-spectacles' : '&#xe042;',
			'icon-matt-hakes-moustache' : '&#xe043;',
			'icon-ian-yates-creative-commons' : '&#xe044;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};