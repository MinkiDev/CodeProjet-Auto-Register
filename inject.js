(
    function() {
        var uid = ''; var mProvider = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;

        for (var i=0; i<12; i++) {
           uid += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        for (var i=0; i<8; i++) {
            mProvider += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        var quickEmail = uid + '@' + mProvider + '.com';

        document.getElementById('ctl00_MC_MemberLogOn_QuickEmail').value = quickEmail;
        document.getElementById('ctl00_MC_MemberLogOn_TermsOfUse').checked = true;
        document.getElementById('ctl00_MC_MemberLogOn_AllNewsletters').checked = false;
        document.getElementById('ctl00_MC_MemberLogOn_SignUpButton').click();
    }
)();