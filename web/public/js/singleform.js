
    singleeditor  = new ace.edit("singleeditor");
    singleeditor.setTheme("ace/theme/twilight");
    singleeditor.getSession().setMode("ace/mode/javascript");
    singleeditor.setShowPrintMargin(false);
    singleeditor.getSession().setUseSoftTabs(true);

    window.onresize = function () {
        $('#singlehint').height($('#singleeditor').height());
    }
    window.onload = function () {
        $('#singlehint').height($('#singleeditor').height());
    };
 		$('form').on('submit', function(e) {
 			e.preventDefault();
 		});
    createProject = function () {
        var code = singleeditor.getValue();
        var name = $('#project').val();
        var tolang = $('#tolang').val();
        var fromlang = $('#fromlang').val();
        //var delim = $('#delim').val();
        var challenges = [code];

        console.log('code');
        console.log(code);
        console.log("doing stuff w/ code");
        //challenges = code.split(delim);
        console.log(challenges);
        console.log("herinasd ");

        var data = {};
        data.project = name;
        data.challenges = challenges;
        data.fromLang = fromlang;
        data.toLang = tolang;

        console.log('meow');
        console.log(data);
        $.ajax({
            type: "post",
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/request-project',
            success: function (data) {
                window.location = '/projects';
            }
        });
    }

    saveData = function() {
        var currentcode = singleeditor.getValue();
        console.log(currentcode);
        $.ajax({
            type: "post",
            data: {code: currentcode},
            url: "/savedCode",
            success: true
        });
    }

    function getData() {
        $.ajax({
            type: "get",
            url: "/savedCode",
            success: function(data) {
                // console.log(JSON.stringify(data.code));
                //singleeditor.setValue(JSON.stringify(data.code, undefined, 4), -1);
            }
        });
    }

    singleeditor.getSession().on('change', function(e){

    });

    $(document).ready(function(){
        getData();
        resizeEditors();
    });

    $(window).resize(resizeEditors);

    singleeditor.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
        }
    }, false);
