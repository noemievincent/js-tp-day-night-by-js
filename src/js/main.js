(function (){
    const oDayNight = {
        init() {
            this.eBody = document.body;
            this.eTumbler = document.querySelector('.tumbler');
            this.aPosts = document.querySelectorAll('.post');
            document.documentElement.classList.add('js-enabled');
            document.querySelector('.tumbler__wrapper').addEventListener('click', (event)=> {
                this.eBody.classList.toggle('body--night-mode');
                this.eTumbler.classList.toggle('tumbler--night-mode');
                for (const ePost of this.aPosts) {
                    ePost.classList.toggle('post--night-mode');
                }
            })
        }
    }
    oDayNight.init();
})();
