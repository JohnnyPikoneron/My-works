
	function startLightBoxOne(){
            var lbBg = document.getElementById("lightBoxBg");
            var lbo = document.getElementById("lightBoxOne");

            lbBg.style.display = "block";
            lbo.style.display = "block";
    }

	function startLightBoxTwo(){
		var lbBg = document.getElementById("lightBoxBg");
		var lbt = document.getElementById("lightBoxTwo");

		lbBg.style.display = "block";
		lbt.style.display = "block";
	}

	function dismiss(){
            var lbBg = document.getElementById("lightBoxBg");
            var lbo = document.getElementById("lightBoxOne");
			var lbt = document.getElementById("lightBoxTwo");
            lbBg.style.display = "none";
            lbo.style.display = " none";
			lbt.style.display = " none";
    }

    function startAction(){
        var ft = document.getElementById("first");
        var sd = document.getElementById("second");
        var fo = document.getElementById("form-one");
        var ftw = document.getElementById("form-two");
        ft.className = "active";
        sd.className = " no-active";
        fo.style.display = " block";
        ftw.style.display = " none";
    }

    function startAction2(){
        var ft = document.getElementById("first");
        var sd = document.getElementById("second");
        var fo = document.getElementById("form-one");
        var ftw = document.getElementById("form-two");
        ft.className = "no-active";
        sd.className = " active";
        fo.style.display = " none";
        ftw.style.display = " block";
    }

    $(document).ready(function() {
        $('#ex1').on('click', function () {
            var id = $(this).attr('id'),
                scrollPositionId = '#' + id + '-1',
                scrollPosition = $(scrollPositionId).offset().top;
            $('body,html').animate({scrollTop: scrollPosition}, 1500);
        });
        


        $('.popup-link').magnificPopup({
        //     items: [
        //
        //         {
        //             src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        //             type: 'inline'
        //         }
        //     ],
        //     gallery: {
        //         enabled: true
        //     },
        //     type: 'image' // this is a default type
        //    
        });

        




    });